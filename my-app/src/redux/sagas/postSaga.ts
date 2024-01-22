import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../utiles/api";
import {
  getMyPosts,
  getPostsList,
  getSelectedPost,
  setMyPosts,
  setPostsList,
  setSelectedPost,
  setSelectedPostLoading,
} from "../reducers/postSlice";
import { PostData } from "../@types";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import callCheckingAuth from "./helpers/callCheckingAuth";

function* getPostsWorker() {
  const response: ApiResponse<PostData> = yield call(API.getPosts);
  if (response.ok && response.data) {
    yield put(setPostsList(response.data.results));
  } else {
    console.error("Get Posts List error", response.problem);
  }
}

function* getSelectedPostWorker(action: PayloadAction<string>) {
  yield put(setSelectedPostLoading(true));
  const response: ApiResponse<undefined> = yield call(
    API.getSelectedPost,
    action.payload
  );
  if (response.ok && response.data) {
    yield put(setSelectedPost(response.data));
  } else {
    console.error("Selected Post error", response.problem);
  }
  yield put(setSelectedPostLoading(false));
}

function* getMyPostsWorker() {
  const response: ApiResponse<PostData> = yield callCheckingAuth(
    API.getMyPosts
  );
  if (response && response?.ok && response?.data) {
    yield put(setMyPosts(response.data.results));
  } else {
    console.error("Get My Posts error", response?.problem);
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(getPostsList, getPostsWorker),
    takeLatest(getSelectedPost, getSelectedPostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
  ]);
}
