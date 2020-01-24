import React, { Component } from "react";
import "./directory.scss";
import MenuItem from "../menu-item/MenuItem";

class Directory extends Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: "hats",
					imageUrl:
						"https://i.ibb.co/wKVPFK1/kaycee-ingram-4-EWh-ZW7q1hg-unsplash.jpg",
					id: 1,
					linkUrl: "hats"
				},
				{
					title: "jackets",
					imageUrl:
						"https://i.ibb.co/vZ9Fs2j/ethan-kent-w-W9lz-em-Jw-unsplash.jpg",
					id: 2,
					linkUrl: ""
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/fYhtkX0/school-aden-2284257-1920.jpg",
					id: 3,
					linkUrl: ""
				},
				{
					title: "womens",
					imageUrl:
						"https://i.ibb.co/W2qvPzj/jyotirmoy-gupta-rfam-Wy-Yn-Zm-I-unsplash.jpg",
					size: "large",
					id: 4,
					linkUrl: ""
				},
				{
					title: "mens",
					imageUrl:
						"https://i.ibb.co/BfYpzfD/aj-gallagher-ep-Nph-Ijd-F84-unsplash.jpg",
					size: "large",
					id: 5,
					linkUrl: ""
				}
			]
		};
	}
	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
