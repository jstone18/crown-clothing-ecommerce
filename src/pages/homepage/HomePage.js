import React from "react";
import Directory from "../../components/directory/Directory";
import { HomePageContainer } from "./HomePage.styles";

const HomePage = ({ history }) => {
	return (
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	);
};

export default HomePage;
