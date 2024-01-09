import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  isSelectedImageOpened: boolean;
  selectedImage: string;
};

const initialState: InitialState = {
  isSelectedImageOpened: false,
  selectedImage: " ",
};

const imgSlice = createSlice({
  name: "imgReducer",
  initialState,
  reducers: {
    setSelectedImageOpened: (state, action: PayloadAction<boolean>) => {
      state.isSelectedImageOpened = action.payload;
    },
    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.selectedImage = action.payload;
    },
  },
});

export const { setSelectedImageOpened, setSelectedImage } = imgSlice.actions;

export const ImgSelectors = {
  getSelectedImageOpened: (state: RootState) =>
    state.imgReducer.isSelectedImageOpened,
  getSelectedImage: (state: RootState) => state.imgReducer.selectedImage,
};

export default imgSlice.reducer;
