import classNames from "classnames";
import { noop } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const currentMusic = useSelector(
    (store) => store.musicReducer.music.currentMusic
  );

  const {
    musicPhoto,
    musicUrl,
    musicDuration,
    musicId,
    musicArtist = "",
    musicName = "",
  } = currentMusic;

  const progress = useRef(null);
  const playIcon = useRef(null);

  const [play, setPlay] = useState(false);

  const progressOuter = useRef(null);

  const [song, setSong] = useState(null);

  const [currentTime, setCurrentTime] = useState(null);

  const [songDuration, setSongDuration] = useState(musicDuration);

  const [isVolumeOpen, setIsVolumeOpen] = useState(false);

  const [volume, setVolume] = useState(1);

  const onBackClick = () => {
    if (currentTime > 10) {
      setCurrentTime(currentTime - 10);
      song.currentTime = currentTime - 10;
      const decreasedPercent = 1000 / songDuration;

      if (progress.current.style.width.includes("px")) {
        const pxData = +`${progress.current.style.width}`.replace("px", "");
        const getPxToPercent =
          (pxData / progressOuter.current.clientWidth) * 100;
        progress.current.style.width = getPxToPercent - decreasedPercent + "%";
      } else {
        progress.current.style.width =
          +`${progress.current.style.width}`.replace("%", "") -
          decreasedPercent +
          "%";
      }
    } else {
      setCurrentTime(0.0);
      song.currentTime = 0.0;
      progress.current.style.width = "0%";
    }
  };

  const onForwardClick = () => {
    if (currentTime + 10 < songDuration) {
      setCurrentTime(currentTime + 10);
      song.currentTime = currentTime + 10;
      const increasedPercent = 1000 / songDuration;

      if (progress.current.style.width.includes("px")) {
        const pxData = +`${progress.current.style.width}`.replace("px", "");
        const getPxToPercent =
          (pxData / progressOuter.current.clientWidth) * 100;
        progress.current.style.width = getPxToPercent + increasedPercent + "%";
      } else {
        progress.current.style.width =
          +`${progress.current.style.width}`.replace("%", "") +
          increasedPercent +
          "%";
      }
    }
  };

  const volumeClassName = classNames(
    "transform origin-center absolute left-[-10px] bottom-[50px] rotate-[-90deg] w-[50px]",
    {
      block: isVolumeOpen,
      hidden: !isVolumeOpen,
    }
  );

  const onVolumeChange = (e) => {
    setVolume(e.target.value / 100);
    if (song) {
      song.volume = e.target.value / 100;
    }
  };

  useEffect(() => {
    if (!song) {
      setSong(new Audio(musicUrl));
    }
    if (song && !song.src) {
      song.src = musicUrl;
    }
  }, [song]);

  useEffect(() => {
    if (song) {
      song.url = musicUrl;
      setSongDuration(musicDuration);
      setCurrentTime(0);
      song.currentTime = 0;
      song.duration = musicDuration;
      progress.current.style.width = "0%";
    }
  }, [musicId]);

  var songEvent;

  if (song) {
    song.onloadedmetadata = () => {
      progress.current.max = song.duration;
      progress.current.value = song.currentTime;
    };

    if (play) {
      songEvent = setInterval(() => {
        progress.current.style.width = `${
          (song.currentTime / song.duration) * 100
        }%`;
      }, 500);
    }
  }

  const onSongUpdate = (e) => {
    progress.current.style.width = `${
      e.clientX - progressOuter.current.offsetLeft
    }px`;
    const progressInPercent =
      ((e.clientX - progressOuter.current.offsetLeft) /
        progressOuter.current.offsetWidth) *
      100;

    let updatedSongDuration = song.duration;

    if (Number.isNaN(updatedSongDuration)) {
      updatedSongDuration = songDuration;
    }
    const songTime = progressInPercent * (updatedSongDuration / 100);
    song.currentTime = songTime;
    setCurrentTime(songTime);
  };

  const onClickSoundButton = () => {
    setIsVolumeOpen(!isVolumeOpen);
  };

  const onPlayPause = () => {
    if (play) {
      if (!Number.isNaN(song.duration)) {
        setSongDuration(song.duration);
      }
      clearInterval(songEvent);
      song.pause();
      setCurrentTime(song.currentTime);
      song.src = "";
    } else {
      if (currentTime) {
        song.src = musicUrl;
        progress.current.style.width = `${
          (song.currentTime / song.duration) * 100
        }%`;
        song.currentTime = currentTime;
        song.volume = volume;
        song.play();
      } else {
        song.src = musicUrl;
        song.play();
      }
    }
    setPlay(!play);
  };

  return musicUrl ? (
    <div className="scroll xl:m-auto w-[100%] xl:mb-[20px] xl:flex xl:flex-col xl:items-center xl:border-gray-800 xl:border-t-2 sm:pt-[66px]">
      <div className="scroll flex xl:flex-row sm:flex-col items-center px-4 max-w-[480px] justify-center w-[100%] xl:pt-4 sm:m-auto">
        <div className=" xl:hidden  w-[100%] flex flex-col items-center mb-4">
          <div className="text-[32px] text-white font-extrabold sm:w-[480px] sm:pl-[16px]">
            {musicName}
          </div>
          <div className="font-gray-700 text-[16px] text-white sm:w-[480px] sm:pl-[16px]">
            {musicArtist}
          </div>
        </div>
        <img
          className="xl:h-[40px] sm:h-[480px] sm:mb-[24px]"
          src={musicPhoto}
        />
        <div
          ref={progressOuter}
          onClick={(e) => onSongUpdate(e)}
          className="w-[100%] grow bg-gray-700 h-[6px] rounded-[16px] mx-4 max-w-[480px]"
        >
          <div
            ref={progress}
            className="h-[6px] rounded-[16px] w-[0%] bg-white"
          ></div>
        </div>
      </div>
      <div
        id="scroll"
        className=".scroll flex w-[100%] justify-around mt-4 max-w-[480px] sm:m-auto sm:pt-4"
      >
        <div className="flex items-center">
          <div className="relative">
            <input
              onChange={(e) => onVolumeChange(e)}
              id="volume"
              type="range"
              className={volumeClassName}
              value={volume * 100}
            ></input>
            <img
              className="h-[30px] w-[30px]"
              src="https://i.ibb.co/xDs0CtD/Frame.png"
              alt="Frame"
              border="0"
              onClick={onClickSoundButton}
            />
          </div>
        </div>
        <div className="flex flex-row w-[50%] justify-between items-center">
          <div>
            <img
              height={16}
              onClick={onBackClick}
              width={24}
              src="https://i.ibb.co/BPXSrYX/left.png"
              alt="left"
              border="0"
            />
          </div>
          <div>
            {play ? (
              <img
                onClick={onPlayPause}
                ref={playIcon}
                src="https://i.ibb.co/260PYnZ/pause.png"
                alt="pause"
                height={48}
                width={48}
                border="0"
              />
            ) : (
              <div>
                <img
                  onClick={onPlayPause}
                  ref={playIcon}
                  src="https://i.ibb.co/sbKrj1h/play-Pause.png"
                  alt="play-Pause"
                  border="0"
                  height={48}
                  width={48}
                />
              </div>
            )}
          </div>
          <div>
            <img
              onClick={onForwardClick}
              height={16}
              width={24}
              src="https://i.ibb.co/LNfgVgc/right.png"
              alt="right"
              border="0"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <img
              className="h-[30px] w-[30px]"
              src="https://i.ibb.co/1rMKDFW/Group-7.png"
              alt="Group-7"
              border="0"
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MusicPlayer;
