import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import directoryReducer from "./reducers/directoryReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
