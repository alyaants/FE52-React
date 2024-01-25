import { create } from "apisauce";
import {
  ActivateUserData,
  SignInUserData,
  SignUpUserData,
} from "../../redux/@types";
import { PER_PAGE } from "../constants";

const API = create({
  baseURL: "https://studapi.teachmeskills.by",
});

const signUpUser = (data: SignUpUserData) => {
  return API.post("/auth/users/", data);
};

const getPosts = (offset: number, search?: string) => {
  return API.get("/blog/posts", { limit: PER_PAGE, offset, search });
};

const activateUser = (data: ActivateUserData) => {
  return API.post("/auth/users/activation/", data);
};

const getSelectedPost = (id: string) => {
  return API.get(`/blog/posts/${id}/`);
};

const createToken = (data: SignInUserData) => {
  return API.post("/auth/jwt/create/", data);
};

const verifyToken = (token: string) => {
  return API.post("/auth/jwt/verify/", { token });
};

const refreshToken = (refresh: string) => {
  return API.post("/auth/jwt/refresh/", { refresh });
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

const getMyPosts = (token: string) => {
  return API.get(
    "/blog/posts/my_posts/",
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
  verifyToken,
  refreshToken,
  getMyPosts,
};
