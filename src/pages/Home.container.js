import { useEffect } from "react";
import { FETCH_PLAYLIST_QUERY } from "../query/playlistQuery";
import Home from "./Home";
import { useQuery } from "@apollo/client";
import { setAllPlaylists } from "../slices/playlist";
import { useDispatch } from "react-redux";
import { updateLoader } from "../slices/loader";

const HomeContainer = () => {
  const { data, loading, error } = useQuery(FETCH_PLAYLIST_QUERY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data && !loading) {
      dispatch(setAllPlaylists({ playlists: data.getPlaylists }));
      dispatch(updateLoader({ value: false }));
    }
    if (loading) {
      dispatch(updateLoader({ value: true }));
    }
  }, [data]);

  return <Home />;
};

export default HomeContainer;
