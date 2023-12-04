import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { Daemon } from "../../App";
import OpenAI from "openai";
import themes from "../../_themes.module.scss";
import styles from "./analysis.module.scss";

const openai = new OpenAI();

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
    console.log("analyzing");
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
