import classNames from "classnames";
import { noop } from "lodash";
import React from "react";
import { sectionTypes } from "../constant/sectionTypeKeys";

const SidePanel = ({
  isOpen = false,
  onChangeSection = noop,
  selectedSection = sectionTypes.ForYou,
  allPlaylists = [],
}) => {
  const slideClass = classNames(
    "fixed top-0 left-0 w-0 transition-width duration-500 bg-green-1 z-50 overflow-hidden min-h-[100vh] overflow-none pt-[20px] flex flex-col",
    { "w-[70vw]": isOpen }
  );

  const genericTabClass = classNames(
    "flex flex-row pl-4 text-white text-[20px] mb-2 min-w-[70vw]"
  );

  const forYouClass = classNames(genericTabClass, {
    "bg-green-600 py-2": sectionTypes.ForYou == selectedSection,
  });

  const topTracksClass = classNames(genericTabClass, {
    "bg-green-600 py-2": sectionTypes.TopTracks == selectedSection,
  });
  const favourite = classNames(genericTabClass, {
    "bg-green-600 py-2": sectionTypes.Favourite == selectedSection,
  });
  const recentlyPlayed = classNames(genericTabClass, {
    "bg-green-600 py-2": sectionTypes.RecentlyPlayed == selectedSection,
  });

  const classMapping = {
    "For You": forYouClass,
    "Top Tracks": topTracksClass,
    Favourites: favourite,
    "Recently Played": recentlyPlayed,
  };

  return (
    <div className={slideClass}>
      <div className="flex flex-row justify-center text-white text-[30px] mb-4">
        OPTIONS
      </div>
      {allPlaylists.map((section) => {
        return (
          <div
            onClick={(event) =>
              onChangeSection({ sectionId: section.id, sectionType: section.title, event })
            }
            className={classMapping[section.title]}
          >
            {section.title}
          </div>
        );
      })}
    </div>
  );
};

export default SidePanel;
