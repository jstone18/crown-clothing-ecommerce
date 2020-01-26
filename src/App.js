import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
	auth,
	createUserProfileDocument
} from "./utilities/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userActions";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// Checks to see if user signs in with the userAuth object
			if (userAuth) {
				// if there is a document, returns userRef
				// if no document, userRef is created with userAuth object
				const userRef = await createUserProfileDocument(userAuth);

				// listen to userRef for any changes, gets back 1st state of data
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			// if user logs out, clear state
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
						}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
