import React, { Component } from "react";
import "./signIn.scss";
import { connect } from "react-redux";
import {
	auth,
	signInWithGoogle
} from "../../utilities/firebase/firebase.utils";
import { googleSignInStart } from "../../redux/actions/userActions";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

class SignIn extends Component {
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

	handleSubmit = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: "", password: "" });
	};

	render() {
		const { googleSignInStart } = this.props;
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
					<div className="buttons">
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, { googleSignInStart })(SignIn);
