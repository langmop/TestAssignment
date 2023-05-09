import React from "react";
import ProfileLogo from "../containers/ProfileLogo";
import classNames from "classnames";
import { sectionTypes } from "../constant/sectionTypeKeys";

const SideBar = ({ onChangeSection, selectedSection, allPlaylists = [] }) => {
  const selectedClassName = classNames(
    "pl-4 pb-4 mb-[2rem] sm:text-[20px] sm:leading-[32px] sm:mb-4 sm:text-gray-500 sm:pl-0 sm:pb-0"
  );

  const forYouClass = classNames(selectedClassName, {
    "xl:bg-green-1 mb-[2rem] py-2 sm:mb-4 sm:py-0 sm:text-white":
      sectionTypes.ForYou == selectedSection,
  });

  const topTracksClass = classNames(selectedClassName, {
    "xl:bg-green-1 mb-[2rem] py-2 sm:mb-4 sm:py-0 sm:text-white":
      sectionTypes.TopTracks == selectedSection,
  });
  const favourite = classNames(selectedClassName, {
    "xl:bg-green-1 mb-[2rem] py-2 sm:mb-4 sm:py-0 sm:text-white":
      sectionTypes.Favourite == selectedSection,
  });
  const recentlyPlayed = classNames(selectedClassName, {
    "xl:bg-green-1 mb-[2rem] py-2 sm:mb-4 sm:py-0 sm:text-white":
      sectionTypes.RecentlyPlayed == selectedSection,
  });

  const classMapping = {
    "For You": forYouClass,
    "Top Tracks": topTracksClass,
    Favourites: favourite,
    "Recently Played": recentlyPlayed,
  };

  const imageMap = {
    [sectionTypes.ForYou]: "https://img.icons8.com/ios/25/FFFFFF/for-you.png",
    [sectionTypes.Favourite]:
      "https://img.icons8.com/ios/25/FFFFFF/love-circled.png",
    [sectionTypes.TopTracks]:
      "https://img.icons8.com/ios/25/FFFFFF/tracks-intersection.png",
    [sectionTypes.RecentlyPlayed]:
      "https://img.icons8.com/wired/25/FFFFFF/replay.png",
  };

  return (
    <div className="hidden usm:flex w-[80px] text-white flex-col justify-between sm:w-[200px] sm:mr-[80px]">
      <div className="flex flex-col sm:hidden">
        {allPlaylists.map((section) => {
          return (
            <div
              onClick={(event) =>
                onChangeSection({
                  sectionId: section.id,
                  sectionType: section.title,
                  event,
                })
              }
              className={classMapping[section.title]}
            >
              <img src={imageMap[section.title]} />
            </div>
          );
        })}
      </div>
      <div className="flex-col pl-[32px] hidden sm:flex">
        <div className="my-[32px]">
          <img
            src="https://i.ibb.co/H2TKpCz/spotify-Logo.png"
            alt="spotify-Logo"
            border="0"
            className="object-contain h-[39px]"
          />
        </div>
        {allPlaylists.map((section) => {
          return (
            <div
              onClick={(event) =>
                onChangeSection({
                  sectionId: section.id,
                  sectionType: section.title,
                  event,
                })
              }
              className={classMapping[section.title]}
            >
              {section.title}
            </div>
          );
        })}
      </div>
      <div className="pl-4 pb-4">
        <ProfileLogo stopOnClick={true} />
      </div>
    </div>
  );
};

export default SideBar;
