import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
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
					<FormInput
						required
						type="email"
						name="email"
						value={this.state.email}
						handleInputChange={this.handleInputChange}
						label="email"
					/>
					<FormInput
						required
						type="password"
						name="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
						label="password"
					/>

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}
