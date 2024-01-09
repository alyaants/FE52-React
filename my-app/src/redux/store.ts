import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import postReducer from "./reducers/postSlice";
import imgReducer from "./reducers/imgSlice";

const Store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
    imgReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export default Store;
