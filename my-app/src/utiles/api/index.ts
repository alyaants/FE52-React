import { create } from "apisauce";
import {
  ActivateUserData,
  SignInData,
  SignUpUserData,
} from "../../redux/@types";

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const signUpUser = (data: SignUpUserData) => {
  return API.post("/auth/users/", data);
};

const getPosts = () => {
  return API.get("/blog/posts/?limit=12");
};

const activateUser = (data: ActivateUserData) => {
  return API.post("/auth/users/activation/", data);
};

const getSelectedPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const createToken = (data: SignInData) => {
  return API.post("/auth/jwt/create/", data);
};

const getUserInfo = (token: string) => {
  return API.get(
    "/auth/users/me/",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default {
  signUpUser,
  getPosts,
  activateUser,
  getSelectedPost,
  createToken,
  getUserInfo,
};
