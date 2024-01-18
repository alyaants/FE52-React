import { all, takeLatest, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import { activateUser, signUpUser } from "../reducers/authSlice";
import {
  ActivateUserPayload,
  SignUpResponseData,
  SignUpUserPayload,
} from "../@types";
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

function* activateUserWorker(action: PayloadAction<ActivateUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<undefined> = yield call(API.activateUser, data);
  if (response.ok) {
    callback();
  } else {
    console.error("Activate User error", response.problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(signUpUser, signUpUserWorker), // забери пследнего и впихни в signUpUserWorker
    takeLatest(activateUser, activateUserWorker),
  ]);
}
