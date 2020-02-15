import React, { useState } from "react";
import "./signIn.scss";
import { connect } from "react-redux";

import {
	googleSignInStart,
	emailSignInStart
} from "../../redux/actions/userActions";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: ""
	});

	const handleInputChange = e => {
		const { value, name } = e.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	const { email, password } = userCredentials;

	const handleSubmit = async e => {
		e.preventDefault();
		emailSignInStart(email, password);
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					required
					type="email"
					name="email"
					value={email}
					handleInputChange={handleInputChange}
					label="email"
				/>
				<FormInput
					required
					type="password"
					name="password"
					value={password}
					handleInputChange={handleInputChange}
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
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
