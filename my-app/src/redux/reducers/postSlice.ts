import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikeStatus, Post, PostsList } from "../../@types";
import {
  GetPostsPayload,
  GetSearchedPostsPayload,
  SetPostsListPayload,
  SetSearchedPostsPayload,
} from "../@types";

type InitialState = {
  isSelectedPostOpened: boolean;
  selectedPostModal: Post | null;
  likedPosts: PostsList;
  dislikedPosts: PostsList;
  favouritesPosts: PostsList;
  postsList: PostsList;
  totalCount: number;
  selectedPost: Post | null;
  selectedPosLoading: boolean;
  myPosts: PostsList;
  searchedPosts: PostsList;
  isPostsListLoading: boolean;
  totalSearchedCount: number;
};

const initialState: InitialState = {
  isSelectedPostOpened: false,
  selectedPostModal: null,
  likedPosts: [],
  dislikedPosts: [],
  favouritesPosts: [],
  postsList: [],
  totalCount: 0,
  selectedPost: null,
  selectedPosLoading: false,
  myPosts: [],
  searchedPosts: [],
  isPostsListLoading: false,
  totalSearchedCount: 0,
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setSelectedPostModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostOpened = action.payload;
    },
    setSelectedPostModal: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
    setLikeStatus: (
      state,
      action: PayloadAction<{ card: Post; status: LikeStatus }>
    ) => {
      const { card, status } = action.payload;
      const likedIndex = state.likedPosts.findIndex(
        (item) => item.id === card.id
      );
      const disLikedIndex = state.dislikedPosts.findIndex(
        (item) => item.id === card.id
      );
      const isLike = status === LikeStatus.Like;
      const mainKey = isLike ? "likedPosts" : "dislikedPosts";
      const secondaryKey = isLike ? "dislikedPosts" : "likedPosts";
      const mainIndex = isLike ? likedIndex : disLikedIndex;
      const secondaryIndex = isLike ? disLikedIndex : likedIndex;
      if (mainIndex === -1) {
        state[mainKey].push(card);
      } else {
        state[mainKey].splice(mainIndex, 1);
      }
      if (secondaryIndex > -1) {
        state[secondaryKey].splice(secondaryIndex, 1);
      }
    },

    setFavouritesPosts: (state, action: PayloadAction<{ card: Post }>) => {
      const { card } = action.payload;
      const favouriteIndex = state.favouritesPosts.findIndex(
        (item) => item.id === card.id
      );
      if (favouriteIndex === -1) {
        state.favouritesPosts.push(card);
      } else {
        state.favouritesPosts.splice(favouriteIndex, 1);
      }
    },

    getPostsList: (_, __: PayloadAction<GetPostsPayload>) => {}, //сначала получить get пустой
    setPostsList: (state, action: PayloadAction<SetPostsListPayload>) => {
      //делаем set action, то что хотим получить и зписать в сагу
      const { total, isOverwrite, postsList } = action.payload;
      state.totalCount = total;
      if (isOverwrite) {
        state.postsList = postsList;
      } else {
        state.postsList.push(...postsList);
      }
    },

    getSelectedPost: (_, __: PayloadAction<string>) => {},
    setSelectedPostLoading: (state, action: PayloadAction<boolean>) => {
      state.selectedPosLoading = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
      state.selectedPost = action.payload;
    },
    getMyPosts: (_, __: PayloadAction<undefined>) => {},
    setMyPosts: (state, action: PayloadAction<PostsList>) => {
      state.myPosts = action.payload;
    },
    getSearchedPosts: (_, __: PayloadAction<GetSearchedPostsPayload>) => {},
    setSearchedPosts: (
      state,
      action: PayloadAction<SetSearchedPostsPayload>
    ) => {
      const { total, postsList, isOverwrite } = action.payload;
      state.totalSearchedCount = total;
      if (isOverwrite) {
        state.searchedPosts = postsList;
      } else {
        state.searchedPosts.push(...postsList);
      }
    },
    setPostsLoading: (state, action: PayloadAction<boolean>) => {
      state.isPostsListLoading = action.payload;
    },
  },
});
export const {
  setSelectedPostModalOpened,
  setSelectedPostModal,
  setLikeStatus,
  setFavouritesPosts,
  getPostsList,
  setPostsList,
  getSelectedPost,
  setSelectedPostLoading,
  setSelectedPost,
  getMyPosts,
  setMyPosts,
  getSearchedPosts,
  setSearchedPosts,
  setPostsLoading,
} = postSlice.actions;

export const PostSelectors = {
  getSelectedPostModalOpened: (state: RootState) =>
    state.postReducer.isSelectedPostOpened,
  getSelectedPostModal: (state: RootState) => state.postReducer.selectedPost,
  getLikedPosts: (state: RootState) => state.postReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postReducer.dislikedPosts,
  getFavouritePosts: (state: RootState) => state.postReducer.favouritesPosts,
  getPostsList: (state: RootState) => state.postReducer.postsList,
  getSelectedPost: (state: RootState) => state.postReducer.selectedPost,
  getSelectedPostLoading: (state: RootState) =>
    state.postReducer.selectedPosLoading,
  getMyPosts: (state: RootState) => state.postReducer.myPosts,
  getSearchedPosts: (state: RootState) => state.postReducer.searchedPosts,
  getPostsLoading: (state: RootState) => state.postReducer.isPostsListLoading,
  getTotalPostsCount: (state: RootState) => state.postReducer.totalCount
};

export default postSlice.reducer;
