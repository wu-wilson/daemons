import { useState } from "react";
import emoji from "./emoji.png";
import styles from "./alert.module.scss";

const Alert = () => {
  const [visited, setVisited] = useState<boolean>(false);

  return visited ? null : (
    <div className={styles["container"]}>
      <img src={emoji} className={styles["icon"]} alt="waving" />
      hey! this was made as a project for a college course. visit the course
      website{" "}
      <a
        href="https://aidesignclass.org/"
        target="_blank"
        onClick={() => setVisited(true)}
      >
        here
      </a>
      .
    </div>
  );
};

export default Alert;
