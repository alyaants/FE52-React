import { all, takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse } from "apisauce";

import {
  activateUser,
  setAccessToken,
  signInUser,
  signUpUser,
} from "../reducers/authSlice";
import {
  ActivateUserPayload,
  SignInUserPayload,
  SignInUserResponseData,
  SignUpResponseData,
  SignUpUserPayload,
} from "../@types";
import API from "../../utiles/api";
import { ACCES_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../utiles/constants";

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

function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
  const { data, callback } = action.payload;
  const response: ApiResponse<SignInUserResponseData> = yield call(
    API.createToken,
    data
  );
  if (response.ok && response.data) {
    yield put(setAccessToken(response.data.access));
    localStorage.setItem(ACCES_TOKEN_KEY, response.data.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);

    callback();
  } else {
    console.error("Sign In User error", response.problem);
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(signUpUser, signUpUserWorker), // забери пследнего и впихни в signUpUserWorker
    takeLatest(activateUser, activateUserWorker),
    takeLatest(signInUser, signInUserWorker),
  ]);
}
