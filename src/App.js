import "./App.css";
import React, { Component } from "react";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// Redux
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/selectors/user.selectors";
import { checkUserSession } from "./redux/actions/userActions";

// Pages
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signIn-signUp/SignInSignUp";
import CheckOut from "./pages/check-out/CheckOut";

class App extends Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
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

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
