import React from "react";
import TopBar from "../components/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { sideModalKey } from "../constant/modalKeys";
import { openModal } from "../slices/modals.js";
import MainSection from "../components/MainSection";
import classNames from "classnames";

const Home = () => {
  const dispatch = useDispatch();

  const isOpen = !!useSelector(
    (store) => store.modalReducer.modalKeys[sideModalKey]
  );

  const currentMusicGradient = useSelector(
    (store) => store.musicReducer.music.currentMusicGradient
  );
  const anyWhereHomeClick = (e) => {
    e.stopPropagation();
    if (isOpen) {
      dispatch(openModal({ key: sideModalKey, value: !isOpen }));
    }
  };

  const updatedClass = classNames("h-[100vh] flex flex-col", {
    "bg-black-1": !(currentMusicGradient||[]).length,
  });
  
  return (
    <div
      style={{ backgroundImage: `linear-gradient(${currentMusicGradient})` }}
      onClick={(e) => anyWhereHomeClick(e)}
      className={updatedClass}
    >
      <TopBar />
      <MainSection />
    </div>
  );
};

export default Home;
