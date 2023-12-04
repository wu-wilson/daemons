import { useState } from "react";
import { BiCollapseVertical, BiExpandVertical } from "react-icons/bi";
import styles from "./accordion.module.scss";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles["container"]}>
      <div className={styles["preview"]}>
        {open ? (
          <BiCollapseVertical
            className={styles["icon"]}
            onClick={() => setOpen(false)}
          />
        ) : (
          <BiExpandVertical
            className={styles["icon"]}
            onClick={() => setOpen(true)}
          />
        )}
        {title}
      </div>
      <div
        className={`${styles["content-container"]} ${
          open ? styles["open"] : ""
        }`}
      >
        <div className={styles["content"]}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
