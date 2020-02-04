const INITIAL_STATE = {
	sections: [
		{
			title: "hats",
			imageUrl:
				"https://i.ibb.co/wKVPFK1/kaycee-ingram-4-EWh-ZW7q1hg-unsplash.jpg",
			id: 1,
			linkUrl: "shop/hats"
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/fYhtkX0/school-aden-2284257-1920.jpg",
			id: 2,
			linkUrl: "shop/sneakers"
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/vZ9Fs2j/ethan-kent-w-W9lz-em-Jw-unsplash.jpg",
			id: 3,
			linkUrl: "shop/jackets"
		},
		{
			title: "womens",
			imageUrl:
				"https://i.ibb.co/W2qvPzj/jyotirmoy-gupta-rfam-Wy-Yn-Zm-I-unsplash.jpg",
			size: "large",
			id: 4,
			linkUrl: "shop/womens"
		},
		{
			title: "mens",
			imageUrl:
				"https://i.ibb.co/BfYpzfD/aj-gallagher-ep-Nph-Ijd-F84-unsplash.jpg",
			size: "large",
			id: 5,
			linkUrl: "shop/mens"
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.payload) {
		default:
			return state;
	}
};

export default directoryReducer;
