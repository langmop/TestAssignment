import { useDispatch, useSelector } from "react-redux";
import SideBarComponent from "../components/SideBar";
import { sideModalKey } from "../constant/modalKeys";
import { setCurrentPlaylist } from "../slices/playlist";
import { sectionTypeAction } from "../slices/section";

const SideBar = () => {
  const isOpen = !!useSelector(
    (store) => store.modalReducer.modalKeys[sideModalKey]
  );

  const selectedSection = useSelector(
    (store) => store.playlistReducer.playlist.currentPlaylist.title
  );

  const allPlaylists = useSelector(
    (store) => store.playlistReducer.playlist.allPlaylists
  );

  const dispatch = useDispatch();

  const onChangeSection = ({ sectionId, sectionType, event }) => {
    event.stopPropagation();
    dispatch(setCurrentPlaylist({ id: sectionId, title: sectionType }));
  };

  return (
    <SideBarComponent
      onChangeSection={onChangeSection}
      selectedSection={selectedSection}
      isOpen={isOpen}
      allPlaylists={allPlaylists}
    />
  );
};

export default SideBar;
