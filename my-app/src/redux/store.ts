import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";
import postReducer from "./reducers/postSlice";

const Store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export default Store;
