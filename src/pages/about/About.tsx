import { BiArrowFromLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  introduction,
  researcherDescription,
  elaboratorDescription,
  grammaristDescription,
  limitations,
  appDescription,
} from "./text";
import { HiBeaker, HiOutlineArrowsExpand } from "react-icons/hi";
import { LuSiren } from "react-icons/lu";
import styles from "./about.module.scss";

const About = () => {
  const navigate = useNavigate();

  const homeRedirect = () => {
    navigate("/home");
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>About Daemon's Workshop</div>
        <div className={styles["section-title"]}>
          Hello From <span>Us!</span>👋
        </div>
        <div className={styles["text"]}>{introduction}</div>
        <div className={styles["section-title"]}>
          <span>What</span> is Daemon's Workshop? 🤔
        </div>
        <div className={styles["text"]}>{appDescription}</div>
        <div className={styles["text-label"]}>
          <HiBeaker className={styles["icon"]} size={20} />
          The Researcher:
        </div>
        <div className={styles["text"]}>{researcherDescription}</div>
        <div className={styles["text-label"]}>
          <HiOutlineArrowsExpand className={styles["icon"]} size={20} />
          The Elaborator:
        </div>
        <div className={styles["text"]}>{elaboratorDescription}</div>
        <div className={styles["text-label"]}>
          <LuSiren className={styles["icon"]} size={20} />
          The Grammarist:
        </div>
        <div className={styles["text"]}>{grammaristDescription}</div>
        <div className={styles["section-title"]}>
          What are the <span>Limits?</span> 🛑
        </div>
        <div className={styles["text"]}>{limitations}</div>
        <div className={styles["btn-container"]}>
          <button className={styles["btn"]} onClick={homeRedirect}>
            Home <BiArrowFromLeft className={styles["arrow"]} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
