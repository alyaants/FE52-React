import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../utiles/api";
import {
  getMyPosts,
  getPostsList,
  getSearchedPosts,
  getSelectedPost,
  setMyPosts,
  setPostsList,
  setPostsLoading,
  setSearchedPosts,
  setSelectedPost,
  setSelectedPostLoading,
} from "../reducers/postSlice";
import { GetPostsPayload, GetPostsResponseData, GetSearchedPostsPayload, PostData } from "../@types";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import callCheckingAuth from "./helpers/callCheckingAuth";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  yield put(setPostsLoading(true));
  const { offset, isOverwrite } = action.payload;
  const response: ApiResponse<GetPostsResponseData> = yield call(
    API.getPosts,
    offset
  );
  if (response.ok && response.data) {
    const { count, results } = response.data;
    yield put(
      setPostsList({
        total: count,
        postsList: results,
        isOverwrite: isOverwrite,
      })
    );
  } else {
    console.error("Get Posts List error", response.problem);
  }
  yield put(setPostsLoading(false));
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

function* getSearchedPostsWorker(action: PayloadAction<GetSearchedPostsPayload>) {
  const { offset, search, isOverwrite  } = action.payload;
  const response: ApiResponse<PostData> = yield call(
    API.getPosts,
    offset,
    search
  );
  if (response.ok && response.data) {
    const { results, count } = response.data;
    yield put(
      setSearchedPosts({
        postsList: results,
        total: count,
        isOverwrite,
      })
    );
  } else {
    console.error("Searched Posts error", response.problem);
  }
}
export default function* postSaga() {
  yield all([
    takeLatest(getPostsList, getPostsWorker),
    takeLatest(getSelectedPost, getSelectedPostWorker),
    takeLatest(getMyPosts, getMyPostsWorker),
    takeLatest(getSearchedPosts, getSearchedPostsWorker),
  ]);
}
