import React from "react";
import ProfileLogo from "../containers/ProfileLogo";
import SidePanel from "../containers/SidePanel";

const TopBar = () => {
  return (
    <div className="h-[53px] sm:hidden">
      <div className="flex justify-center items-center h-[100%] sm:hidden">
        <img
          src="https://i.ibb.co/H2TKpCz/spotify-Logo.png"
          alt="spotify-Logo"
          border="0"
          className="object-contain h-[60%]"
        />
      </div>
      <div className="usm:hidden">
        <ProfileLogo />
      </div>
      <SidePanel />
    </div>
  );
};

export default TopBar;
