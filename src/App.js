import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
	auth,
	createUserProfileDocument
} from "./components/firebase/firebase.utils";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// Checks to see if user signs in with the userAuth object
			if (userAuth) {
				// if there is a document, returns userRef
				// if no document, userRef is created with userAuth object
				const userRef = await createUserProfileDocument(userAuth);

				// listen to userRef for any changes, gets back 1st state of data
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}
			// if user logs out, clear state
			this.setState({
				currentUser: userAuth
			});
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={Shop} />
					<Route path="/signin" component={SignInSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
