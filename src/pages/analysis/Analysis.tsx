import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Daemon } from "../../App";
import { prompts } from "./prompts";
import { ChatCompletion } from "openai/resources";
import OpenAI from "openai";
import Highlighter from "../../components/highlighter/Highlighter";
import themes from "../../_themes.module.scss";
import styles from "./analysis.module.scss";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const Analysis = ({ text, daemon }: { text: string; daemon: Daemon }) => {
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
    const completion: ChatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompts[daemon.id] + text }],
      model: "gpt-3.5-turbo",
    });
    if (completion.choices[0].message.content) {
      const res: { [key: string]: string } = JSON.parse(
        completion.choices[0].message.content
      );
      setResponse(res);
    }
  };

  useEffect(() => {
    if (response) {
      console.log(response);
      setLoading(false);
    }
  }, [JSON.stringify(response)]);

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
          <Highlighter
            text={text.replace(/\s+/g, " ").trim()}
            tags={Object.keys(response ? response : {})}
          />
        )}
      </div>
    </div>
  );
};

export default Analysis;
