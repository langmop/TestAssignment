import ProfileLogoComponent from "../components/ProfileLogo";
import { openModal } from "../slices/modals";
import { useSelector, useDispatch } from "react-redux";
import { sideModalKey } from "../constant/modalKeys";

const ProfileLogo = ({ stopOnClick = false }) => {
  const dispatch = useDispatch();
  const sideModalCurrentState = !!useSelector(
    (store) => store.modalReducer.modalKeys[sideModalKey]
  );

  const onProfilePictureClick = () => {
    if (!stopOnClick) {
      dispatch(openModal({ key: sideModalKey, value: !sideModalCurrentState }));
    }
  };

  return <ProfileLogoComponent onProfilePictureClick={onProfilePictureClick} />;
};

export default ProfileLogo;
