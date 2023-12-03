import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const redirectSetup = () => {
    navigate("/workshop");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        Ask <span>Daemon</span>
      </div>
      <div className={styles["subtext"]}>
        <span>Need a second opinion? Find out exactly how</span>
        <span>to improve your writing.</span>
      </div>
      <button className={styles["btn"]} onClick={redirectSetup}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
