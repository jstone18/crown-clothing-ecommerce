import React from "react";
// Styled Components
import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer
} from "./CollectionPreview.styles";
// React Router
import { withRouter } from "react-router-dom";
// Components
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
	return (
		<CollectionPreviewContainer>
			<TitleContainer
				onClick={() => history.push(`${match.path}/${routeName}`)}>
				{title.toUpperCase()}
			</TitleContainer>
			<PreviewContainer>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</PreviewContainer>
		</CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
