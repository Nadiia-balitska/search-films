import { useState, useEffect, useRef } from "react";

import s from "./UserBar.module.css";
import { UserBarPopover } from "../UserBarPopover/UserBarPopover";
import Logout from "../Logout/Logout";
import { SettingsProfile } from "./SettingsProfile";

const UserBar = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const userBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userBarRef.current && !userBarRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userBarRef]);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.name}>
        Hello,<span>name</span>
      </h2>
      <button className={s.bar} ref={userBarRef} onClick={togglePopover}>
        <h3 className={s.s_name}>name</h3>
        <img
          src="https://th.bing.com/th/id/OIP.QZIRZKUSWt1HBifjDRKGzAHaFj?w=232&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="avatar"
          className={s.img}
        />

        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="white" />
        </svg>
      </button>

      {isPopoverOpen && (
        <UserBarPopover
          onSettingsClick={() => setIsSettingsModalOpen(true)}
          onLogOutClick={() => setIsLogOutModalOpen(true)}
          onClose={() => setIsPopoverOpen(false)}
        />
      )}
      {isSettingsModalOpen && (
        <SettingsProfile onClose={() => setIsSettingsModalOpen(false)} />
      )}
      {isLogOutModalOpen && (
        <Logout onClose={() => setIsLogOutModalOpen(false)} />
      )}
    </div>
  );
};
export default UserBar;
