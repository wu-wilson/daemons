import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Daemon } from "../../App";
import OpenAI from "openai";
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

  const getAnalysis = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Who won the world series in 2020?" },
        {
          role: "assistant",
          content: "The Los Angeles Dodgers won the World Series in 2020.",
        },
        { role: "user", content: "Where was it played?" },
      ],
      model: "gpt-3.5-turbo",
    });
    console.log(completion);
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
          "Analysis"
        )}
      </div>
    </div>
  );
};

export default Analysis;
