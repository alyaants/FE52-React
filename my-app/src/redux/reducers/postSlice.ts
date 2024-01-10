import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LikeStatus, Post, PostsList } from "../../@types";

type InitialState = {
  isSelectedPostOpened: boolean;
  selectedPost: Post | null;
  likedPosts: PostsList;
  dislikedPosts: PostsList;
  favouritesPosts: PostsList;
};

const initialState: InitialState = {
  isSelectedPostOpened: false,
  selectedPost: null,
  likedPosts: [],
  dislikedPosts: [],
  favouritesPosts: [],
};

const postSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setSelectedPostOpened: (state, action: PayloadAction<boolean>) => {
      state.isSelectedPostOpened = action.payload;
    },
    setSelectedPost: (state, action: PayloadAction<Post | null>) => {
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
  },
});
export const {
  setSelectedPostOpened,
  setSelectedPost,
  setLikeStatus,
  setFavouritesPosts,
} = postSlice.actions;

export const PostSelectors = {
  getSelectedPostOpened: (state: RootState) =>
    state.postReducer.isSelectedPostOpened,
  getSelectedPost: (state: RootState) => state.postReducer.selectedPost,
  getLikedPosts: (state: RootState) => state.postReducer.likedPosts,
  getDislikedPosts: (state: RootState) => state.postReducer.dislikedPosts,
  getFavouritePosts: (state: RootState) => state.postReducer.favouritesPosts,
};

export default postSlice.reducer;
