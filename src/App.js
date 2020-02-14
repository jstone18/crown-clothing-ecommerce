import "./App.css";
import React, { Component } from "react";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// Redux
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/selectors/user.selectors";

// Pages
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";
import CheckOut from "./pages/check-out/CheckOut";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		// 	// Checks to see if user signs in with the userAuth object
		// 	if (userAuth) {
		// 		// if there is a document, returns userRef
		// 		// if no document, userRef is created with userAuth object
		// 		const userRef = await createUserProfileDocument(userAuth);
		// 		// listen to userRef for any changes, gets back 1st state of data
		// 		userRef.onSnapshot(snapShot => {
		// 			setCurrentUser({
		// 				id: snapShot.id,
		// 				...snapShot.data()
		// 			});
		// 		});
		// 	}
		// 	// if user logs out, clear state
		// 	setCurrentUser(userAuth);
		// });
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
					<Route exact path="/checkout" component={CheckOut} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
