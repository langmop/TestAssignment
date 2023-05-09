import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Music = ({ music, currentMusic, onMusicTabClick, playlistTitle }) => {
  const dispatch = useDispatch();
  const { musicId, musicName, musicPlayList } = currentMusic;

  const { title, photo, duration, artist } = music;

  const selectedClassName = classNames("grow flex flex-col", {
    "bg-[#262B35]": musicName == title,
  });

  const minutes = Number(Math.floor(Number(duration) / 60));
  const seconds = Number(Number(duration) % 60);

  return (
    <div
      className={selectedClassName}
      onClick={() => onMusicTabClick({ ...music, playlistTitle })}
    >
      <div className="p-[16px] flex flex-row justify-between">
        <div className="flex flex-row">
          <div>
            <img src={photo} alt="image-4" border="0" className="h-[48px]" />
          </div>
          <div className="flex flex-col ml-4">
            <div className="font-[18px]">{title}</div>
            <div className="font-[14px] text-gray-500">{artist}</div>
          </div>
        </div>
        <div className="text-gray-500 font-[18px] pl-4">{`${minutes}:${seconds}`}</div>
      </div>
    </div>
  );
};

export default Music;
