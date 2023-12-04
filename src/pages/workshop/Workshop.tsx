import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Daemon, Daemons } from "../../App";
import Accordion from "../../components/accordion/Accordion";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./workshop.module.scss";

const instructions =
  "\nNeed help editing a small passage of text? Start by pasting the text you'd like help with below.\n\nOnce you are done, choose the Daemon you'd like to assist you. Then, we'll ask the Daemon where and how your text could be improved.";
const maxCharacters = 1000;

const Workshop = ({
  text,
  setText,
  daemon,
  setDaemon,
}: {
  text: string;
  setText: (text: string) => void;
  daemon: Daemon;
  setDaemon: (daemon: Daemon) => void;
}) => {
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const checkValidation = () => {
    if (!daemon) {
      setError("Please select a Daemon");
    } else if (!text.replace(/\s/g, "").length) {
      setError("Please do not just type whitespace");
    } else if (text.length < 100) {
      setError("Please type at least 100 characters");
    } else {
      navigate("/analysis");
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
        <div className={styles["description"]}>{daemon.description}</div>
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
