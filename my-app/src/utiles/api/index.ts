import { create } from "apisauce";
import { ActivateUserData, SignUpUserData } from "../../redux/@types";

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

const getSelectedPost = (id:string) => {
  return API.get(`/blog/posts/${id}/`);
};

export default { signUpUser, getPosts, activateUser, getSelectedPost };
