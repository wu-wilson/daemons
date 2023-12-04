import Accordion from "../../components/accordian/Accordion";
import styles from "./workshop.module.scss";

const instructions =
  "\nDo you need help editing a small passage of text? Start by pasting your text below.\n\nOnce you are done, choose the Daemon you'd like to assist you. Then, we'll ask him for some suggestions!";

const Workshop = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>What Should Daemon Check Out?</div>
        <div className={styles["accordion-container"]}>
          <Accordion title={"How does this work?"} content={instructions} />
        </div>
      </div>
    </div>
  );
};

export default Workshop;
