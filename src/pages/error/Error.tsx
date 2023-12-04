import { BiError, BiArrowFromLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.scss";

const Error = () => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate("/home");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <BiError className={styles["icon"]} />
        Oops
      </div>
      <div className={styles["subtext"]}>
        Sorry, something went wrong. Try returning to the home page and trying
        again later.
      </div>
      <button className={styles["btn"]} onClick={homeRedirect}>
        Home <BiArrowFromLeft className={styles["arrow"]} />
      </button>
    </div>
  );
};

export default Error;
