import React, { Component } from "react";
import "./signIn.scss";

export default class SignIn extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: ""
		};
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input
						required
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleInputChange}
					/>
					<label>Email</label>
					<input
						required
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleInputChange}
					/>
					<label>Password</label>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
