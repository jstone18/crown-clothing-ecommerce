import React from "react";
import "./homePage.scss";
import Directory from "../../components/directory/Directory";

const HomePage = ({ history }) => {
	return (
		<div className="homepage">
			<Directory />
		</div>
	);
};

export default HomePage;
