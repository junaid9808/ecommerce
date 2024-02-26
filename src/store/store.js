import { configureStore } from "@reduxjs/toolkit";
import loginUser from "./slices/UserSlices";
import addToCart from "./slices/Cartslice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ProductSlice from "./slices/ProductSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  loginUser: loginUser,
  addToCart: addToCart,
  products: ProductSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["addToCart", "products"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    persistedReducer: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;
