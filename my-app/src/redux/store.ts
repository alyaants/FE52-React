import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./reducers/themeSlice";
import postReducer from "./reducers/postSlice";
import imgReducer from "./reducers/imgSlice";
import authReducer from "./reducers/authSlice";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    themeReducer,
    postReducer,
    imgReducer,
    authReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof Store.getState>;

export default Store;
