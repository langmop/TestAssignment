import { useQuery } from "@apollo/client";
import MusicList from "../components/MusicList";
import { FETCH_MUSIC_BY_SEARCH } from "../query/musicQuery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setAllMusic } from "../slices/music";
import { updateLoader } from "../slices/loader";

const MusicListContainer = () => {
  const dispatch = useDispatch();
  const { id: playListId, title } = useSelector(
    (store) => store.playlistReducer.playlist.currentPlaylist
  );

  const isLoading = useSelector((store) => store.loaderReducer.isLoading);

  const [searchKeyword, setSearchKeyword] = useState("");

  const allMusicList = useSelector(
    (store) => store.musicReducer.music.allMusic
  );

  const { data, loading, error } = useQuery(FETCH_MUSIC_BY_SEARCH, {
    variables: {
      playlistId: Number(playListId),
      search: searchKeyword,
    },
  });

  useEffect(() => {
    if (data && !loading) {
      const { getSongs } = data;
      dispatch(
        setAllMusic({
          musicList: getSongs,
        })
      );
      dispatch(updateLoader({ value: false }));
    }
    if (loading) {
      dispatch(updateLoader({ value: true }));
    }
  }, [data]);

  return (
    <MusicList
      isLoading={isLoading}
      setSearchKeyword={setSearchKeyword}
      playListId={playListId}
      playlistTitle={title}
      allMusicList={allMusicList}
    />
  );
};

export default MusicListContainer;
