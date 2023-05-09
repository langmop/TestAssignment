import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  music: {
    currentMusic: {
      musicId: "",
      musicName: "",
      musicPlayList: "",
      musicPhoto: "",
      musicUrl: "",
      musicDuration: "",
      musicArtist: "",
    },
    allMusic: [],
    currentMusicGradient: [],
  },
};

const modalSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    updateMusic: (state, action) => {
      const {
        musicId,
        musicName,
        musicPlayList,
        musicPhoto,
        musicUrl,
        musicDuration,
        musicArtist,
      } = action.payload;
      state.music.currentMusic.musicId = musicId;
      state.music.currentMusic.musicName = musicName;
      state.music.currentMusic.musicPlayList = musicPlayList;
      state.music.currentMusic.musicPhoto = musicPhoto;
      state.music.currentMusic.musicUrl = musicUrl;
      state.music.currentMusic.musicDuration = musicDuration;
      state.music.currentMusic.musicArtist = musicArtist;
    },
    setAllMusic: (state, action) => {
      const { musicList } = action.payload;
      state.music.allMusic = musicList;
    },
    setCurrentMusicGradient: (state, action) => {
      const { gradient } = action.payload;
      state.music.currentMusicGradient = gradient;
    },
  },
});

export const { updateMusic, setAllMusic, setCurrentMusicGradient } =
  modalSlice.actions;
export default modalSlice.reducer;
