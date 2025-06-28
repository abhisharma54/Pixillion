import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  explore: false,
  photos: [],
  preview: null,
};

const FavPhotoSlice = createSlice({
  name: "photo-data",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    onExplore: (state) => {
      state.explore = true;
    },
    setPreviewImg: (state, action) => {
      state.preview = action.payload;
    },
  },
});

export const { setPhotos, onExplore, setPreviewImg } = FavPhotoSlice.actions;

export default FavPhotoSlice.reducer;
