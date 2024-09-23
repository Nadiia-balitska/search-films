import s from "./Logout.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
// import { logoutThunk } from "../../redux/auth/operations";
// import { useDispatch } from "react-redux";

const Logout = ({ isOpen, onClose }) => {
  const handleLogout = () => {
    // const dispatch = useDispatch();

    console.log("User logged out");
    onClose();
  };
  //   const { isMobile } = useResponse();

  return (
    <ModalWindow isOpen={isOpen} onClose={onClose}>
      <div className={s.box}>
        <h4 className={s.title}>Log out</h4>

        <p className={s.text}>Do you really want to leave?</p>
        <button className={s.logout} onClick={handleLogout}>
          logout
        </button>
        <button className={s.cancel} onClick={onClose}>
          cancel
        </button>
      </div>
    </ModalWindow>
  );
};
export default Logout;
