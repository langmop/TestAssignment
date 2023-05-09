import { noop } from "lodash";
import React from "react";

const ProfileLogo = ({ onProfilePictureClick = noop }) => {
  return (
    <div
      className="absolute left-[20px] top-[5px] usm:static"
      onClick={onProfilePictureClick}
    >
      <img
        src="https://i.ibb.co/qmn5hSP/Profile.png"
        alt="Profile"
        border="0"
        className="h-[40px] z-50"
      />
    </div>
  );
};

export default ProfileLogo;
