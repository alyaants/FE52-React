import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../utiles/api";
import { getPostsList, getSelectedPost, setPostsList, setSelectedPost } from "../reducers/postSlice";
import { GetPostsResponseData } from "../@types";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";

function* getPostsWorker() {
  const response: ApiResponse<GetPostsResponseData> = yield call(
    API.getPosts,
  );
  if (response.ok && response.data) {
    yield put(setPostsList(response.data.results))
  } else {
    console.error("Get Posts List error", response.problem);
  }
}

function* getSelectedPostWorker(action: PayloadAction<string>){
  const response: ApiResponse<undefined> = yield call(
    API.getSelectedPost,
    action.payload
  );
  if (response.ok && response.data) {
    yield put(setSelectedPost(response.data))
  } else {
    console.error("Selected Post error", response.problem);
  }
}

export default function* postSaga() {
  yield all([takeLatest(getPostsList, getPostsWorker),
    takeLatest(getSelectedPost, getSelectedPostWorker)]);
}
