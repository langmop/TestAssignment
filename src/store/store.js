import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../slices/modals";
import sectionReducer from "../slices/section";
import musicReducer from "../slices/music";
import playlistReducer from "../slices/playlist";
import loaderReducer from "../slices/loader";

export default configureStore({
  reducer: {
    modalReducer,
    sectionReducer,
    musicReducer,
    playlistReducer,
    loaderReducer,
  },
});
