import { all, takeLatest, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import { signUpUser } from "../reducers/authSlice";
import { SignUpResponseData, SignUpUserPayload } from "../@types";
import API from "../../utiles/api";

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<SignUpResponseData> = yield call(
    API.signUpUser,
    data
  );
  if (response.ok && response.data) {
    callback();
  } else {
    console.error("Sign Up User error", response.problem);
  }
}

export default function* authSaga() {
  yield all([takeLatest(signUpUser, signUpUserWorker)]); // забери пследнего и впихни в signUpUserWorker
}
