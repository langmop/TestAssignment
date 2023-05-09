import React from "react";
import SideBar from "../containers/SideBar";
import MusicList from "./MusicList";
import MusicListContainer from "../containers/MusicList";

const MainSection = () => {

  return (
    <div className="flex flex-row grow overflow-auto mb-4">
      <SideBar />
      <MusicListContainer />
    </div>
  );
};

export default MainSection;
