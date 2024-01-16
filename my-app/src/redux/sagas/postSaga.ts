import { all, call, put, takeLatest } from "redux-saga/effects";
import API from "../../utiles/api";
import { getPostsList, setPostsList } from "../reducers/postSlice";
import { GetPostsPayload, GetPostsResponseData } from "../@types";
import { ApiResponse } from "apisauce";

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

export default function* postSaga() {
  yield all([takeLatest(getPostsList, getPostsWorker)]);
}
