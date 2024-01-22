import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikeStatus, Post, PostsList } from "../../@types";

type InitialState = {
  isSelectedPostOpened: boolean;
  selectedPostModal: Post | null;
  likedPosts: PostsList;
  dislikedPosts: PostsList;
  favouritesPosts: PostsList;
  postsList: PostsList;
  selectedPost: Post | null;
  selectedPosLoading: boolean;
  myPosts: PostsList;
};

const initialState: InitialState = {
  isSelectedPostOpened: false,
  selectedPostModal: null,
  likedPosts: [],
  dislikedPosts: [],
  favouritesPosts: [],
  postsList: [],
  selectedPost: null,
  selectedPosLoading: false,
  myPosts: [],
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

    getPostsList: (_, __: PayloadAction<undefined>) => {}, //сначала получить get пустой
    setPostsList: (state, action: PayloadAction<PostsList>) => {
      //делаем set action, то что хотим получить и зписать в сагу
      state.postsList = action.payload;
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
};

export default postSlice.reducer;
