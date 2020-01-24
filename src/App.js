import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={Shop} />
				<Route path="/signin" component={SignInSignUp} />
			</Switch>
		</div>
	);
}

export default App;
