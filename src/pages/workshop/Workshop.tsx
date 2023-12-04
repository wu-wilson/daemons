import { FormEvent, useState } from "react";
import Accordion from "../../components/accordian/Accordion";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./workshop.module.scss";

const instructions =
  "\nNeed help editing a small passage of text? Start by pasting the text you'd like help with below.\n\nOnce you are done, choose the Daemon you'd like to assist you. Then, we'll ask the Daemon where and how your text could be improved.";
const maxCharacters = 500;

export type Daemon = {
  id: number;
  name: string;
};

const Daemons: Daemon[] = [
  { id: 0, name: "The Researcher" },
  { id: 1, name: "The Elaborator" },
];

const Workshop = () => {
  const [text, setText] = useState<string>("");
  const [daemon, setDaemon] = useState<Daemon>(Daemons[0]);

  const [error, setError] = useState<string | null>(null);

  const checkValidation = () => {
    if (!daemon) {
      setError("Please select a Daemon");
    } else if (!text.replace(/\s/g, "").length) {
      setError("Please do not just type whitespace");
    } else if (text.length < 100) {
      setError("Please type at least 100 characters");
    } else {
      // Start
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["title"]}>What Should Daemon Check Out?</div>
        <div className={styles["accordion-container"]}>
          <Accordion title={"How does this work?"} content={instructions} />
        </div>
        {error ? <span className={styles["error"]}>{error}</span> : null}
        <div className={styles["textarea-container"]}>
          <textarea
            className={styles["textarea"]}
            value={text}
            onChange={(e: FormEvent<HTMLTextAreaElement>) =>
              setText(e.currentTarget.value)
            }
            placeholder="Paste your text here..."
            maxLength={maxCharacters}
          />
          <span className={styles["character-count"]}>
            {text.length}/{maxCharacters} Characters
          </span>
        </div>
        <Dropdown
          options={Daemons}
          value={daemon}
          setValue={setDaemon}
          width={300}
          height={25}
        />
        <div className={styles["btn-container"]}>
          <button className={styles["btn"]} onClick={checkValidation}>
            Ask Daemon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
