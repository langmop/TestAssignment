import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: {
    currentPlaylist: {
      id: "1",
      title: "For You",
    },
    allPlaylists: [],
  },
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action) => {
      const { id, title } = action.payload;
      state.playlist.currentPlaylist.id = id;
      state.playlist.currentPlaylist.title = title;
    },
    setAllPlaylists: (state, action) => {
      state.playlist.allPlaylists = action.payload.playlists;
    },
  },
});

export const { setAllPlaylists, setCurrentPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
