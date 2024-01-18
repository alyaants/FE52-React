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


export type ActivateUserData = {
  uid: string;
  token: string;
};


export type SignUpUserPayload = PayloadWithDataAndCallback<SignUpUserData>;
export type ActivateUserPayload = PayloadWithDataAndCallback<ActivateUserData>
