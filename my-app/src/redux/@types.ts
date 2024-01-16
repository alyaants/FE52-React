import { PostsList } from "../@types";

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

export type SignUpUserPayload = {
  data: SignUpUserData;
  callback: () => void;
};

export type GetPostsPayload = {
  offset: number;
  isOverwrite: boolean;
  ordering?: string;
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
