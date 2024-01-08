import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Post } from "../../@types";

type InitialState = {
  isSelectedPostOpened: boolean;
  selectedPost: Post | null;
};

const initialState: InitialState = {
  isSelectedPostOpened: false,
  selectedPost: null,
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
  },
});
export const { setSelectedPostOpened, setSelectedPost } = postSlice.actions;

export const PostSelectors = {
  getSelectedPostOpened: (state: RootState) =>
    state.postReducer.isSelectedPostOpened,
    getSelectedPost: (state: RootState) =>
    state.postReducer.selectedPost,
};

export default postSlice.reducer;
