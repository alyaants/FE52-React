import { PostsList } from "../@types";

export type PayloadWithDataAndCallback<Data> = {
  data: Data;
  callback: () => void;
};

export type SignUpUserData = {
  username: string;
  email: string;
  password: string;
};

export type SignUpResponseData = {
  username: string;
  email: string;
  id: number;
};

export type SignUpUserPayload = PayloadWithDataAndCallback<SignUpUserData>;

export type ActivateUserData = {
  uid: string;
  token: string;
};

export type ActivateUserPayload = PayloadWithDataAndCallback<ActivateUserData>;

export type PostData = {
  count: number;
  next: string;
  previous: null;
  results: PostsList;
};

export type SignInUserData = {
  email: string;
  password: string;
};

export type SignInUserPayload = PayloadWithDataAndCallback<SignInUserData>;

export type SignInUserResponse = {
  access: string;
  refresh: string;
};

export type UserInfoResponse = {
  username: string;
  id: number;
  email: string;
};

export type RefreshResponseData = {
  access: string;
};

export type GetPostsPayload = {
  offset: number;
  isOverwrite: boolean;
};

export type SetPostsListPayload = {
  total: number;
  postsList: PostsList;
  isOverwrite: boolean;
};

export type GetPostsResponseData = {
  count: number;
  next: string;
  previous: string;
  results: PostsList;
};

export type GetSearchedPostsPayload = {
  offset: number;
  search: string;
  isOverwrite: boolean;
};

export type SetSearchedPostsPayload = SetPostsListPayload;