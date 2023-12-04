import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Daemon } from "../../App";
import { prompts } from "./prompts";
import { ChatCompletion } from "openai/resources";
import { GrMail } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import OpenAI from "openai";
import Accordion from "../../components/accordion/Accordion";
import Highlighter from "../../components/highlighter/Highlighter";
import themes from "../../_themes.module.scss";
import styles from "./analysis.module.scss";

const limitations =
  "\nIf your results look a bit off, it's probably due to the limitations of Daemon's Workshop. This website leverages OpenAI's GPT-3.5 Turbo, a powerful language learning model, to produce results. \n\nHowever, the model is highly susceptible to poor prompting. We've noticed issues arise with complex punctuation and improper punctuation. We are still working on fine-tuning our prompts, so we apologize for any inconvenience.";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Analysis = ({ text, daemon }: { text: string; daemon: Daemon }) => {
  const navigate = useNavigate();
  const navigateWorkshop = () => {
    navigate("/workshop");
  };

  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    switch (loading) {
      case null:
        setLoading(true);
        break;
      case true:
        getAnalysis();
        break;
    }
  }, [loading]);

  const [response, setResponse] = useState<{ [key: string]: string } | null>(
    null
  );

  const getAnalysis = async () => {
    const completion: ChatCompletion | void = await openai.chat.completions
      .create({
        messages: [{ role: "user", content: prompts[daemon.id] + text }],
        model: "gpt-3.5-turbo",
      })
      .catch(() => {
        navigate("/error");
      });
    try {
      if (completion?.choices[0].message.content) {
        const res: { [key: string]: string } = JSON.parse(
          completion.choices[0].message.content
        );
        setResponse(res);
      }
    } catch {
      navigate("/error");
    }
  };

  useEffect(() => {
    if (response) {
      setLoading(false);
    }
  }, [JSON.stringify(response)]);

  const [clickedText, setClickedText] = useState<string | null>(null);

  const getValueFromCaseInsensitiveKey = (
    object: { [key: string]: string },
    key: string
  ) => {
    const keyLowerCase = key.toLowerCase();
    return object[
      Object.keys(object).filter((k) => k.toLowerCase() === keyLowerCase)[0]
    ];
  };

  const getTags = (object: { [key: string]: string }) => {
    let keys = Object.keys(object);
    let tags: string[] = [];
    keys.forEach((key) => {
      const tag =
        key.slice(0, key.length - 1) + "\\" + key.slice(key.length - 1);
      tags.push(tag);
    });
    return tags;
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        {loading ? (
          <div className={styles["loading-container"]}>
            <HashLoader color={themes.font_color} size={70} />
            <span className={styles["loading-label"]}>
              {daemon.name}'s Taking a Look...
            </span>
          </div>
        ) : (
          <>
            <div className={styles["title"]}>
              Click Highlighted Sections for Feedback
            </div>
            <div className={styles["accordion-container"]}>
              <Accordion
                title={"Does your result look weird?"}
                content={limitations}
              />
            </div>
            <div className={styles["text-container"]}>
              <Highlighter
                text={text}
                tags={response ? getTags(response) : []}
                setClickedText={setClickedText}
              />
            </div>
            {clickedText && response ? (
              <div className={styles["feedback"]}>
                <span className={styles["feedback-title"]}>
                  <GrMail className={styles["mail"]} /> Message from{" "}
                  {daemon.name}:
                </span>
                <span>
                  {getValueFromCaseInsensitiveKey(response, clickedText)}
                </span>
              </div>
            ) : null}
            <div className={styles["btn-container"]}>
              <button className={styles["btn"]} onClick={navigateWorkshop}>
                Back to Workshop
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Analysis;
