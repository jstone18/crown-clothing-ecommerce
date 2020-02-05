import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	display: flex;
	width: 100%;
	height: 70px;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	width: 25%;
	height: 70px;
	padding: 25px;
`;

export const TitleContainer = styled.span`
	font-size: 20px;
`;

export const OptionsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 50%;
	height: 100%;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
