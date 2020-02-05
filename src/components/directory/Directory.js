import React from "react";

// Styled Components
import { DirectoryMenuContainer } from "./Directory.styles";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/selectors/directory.selectors";

// Components
import MenuItem from "../menu-item/MenuItem";

const Directory = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</DirectoryMenuContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
