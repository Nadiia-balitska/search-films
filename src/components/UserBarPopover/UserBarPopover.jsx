import { useState } from "react";
import Logout from "../Logout/Logout";
import s from "./UserBarPopover.module.css";

export const UserBarPopover = ({ onSettingsClick }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutModalOpen = () => {
    setIsLogoutModalOpen(true);
  };
  const handleLogoutModalClose = () => {
    setIsLogoutModalOpen(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <button className={s.setting} onClick={onSettingsClick}>
          {/* <img src="../../images/sprite.svg#settings" alt="" /> */}
          Settings
        </button>
      </div>
      <div className={s.btn}>
        <button
          onClick={handleLogoutModalOpen}
          className={s.exit}
          type="button"
        >
          {/* <img src="../../images/sprite.svg#log-out" alt="" /> */}
          Log-out
        </button>
        <Logout isOpen={isLogoutModalOpen} onClose={handleLogoutModalClose} />
      </div>
    </div>
  );
};
