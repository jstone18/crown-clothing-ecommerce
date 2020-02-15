import React from "react";
import {
	HeaderContainer,
	LogoContainer,
	TitleContainer,
	OptionsContainer,
	OptionLink
} from "./Header.styled";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";
import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { signOutStart } from "../../redux/actions/userActions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
				<TitleContainer>KINGDOM CLOTHING</TitleContainer>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={signOutStart}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
