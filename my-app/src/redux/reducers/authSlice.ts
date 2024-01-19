import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ActivateUserPayload,
  SignInUserPayload,
  SignUpUserPayload,
} from "../@types";
import { ACCES_TOKEN_KEY } from "../../utiles/constants";
import { RootState } from "../store";

type InitialState = {
  accessToken: string;
};

const initialState: InitialState = {
  accessToken: localStorage.getItem(ACCES_TOKEN_KEY) || "",
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => {},
    activateUser: (_, __: PayloadAction<ActivateUserPayload>) => {},

    signInUser: (_, __: PayloadAction<SignInUserPayload>) => {},

    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { signUpUser, activateUser, signInUser, setAccessToken } =
  authSlice.actions;

export const AuthSelectors = {
  getLoggedIn: (state: RootState) => !!state.authReducer.accessToken,
};

export default authSlice.reducer;
