import styles from "./highlighter.module.scss";

const Highlighter = ({ text, tags }: { text: string; tags: string[] }) => {
  const matches = [...text.matchAll(new RegExp(tags.join("|"), "g"))];
  const startText = text.slice(0, matches[0]?.index);

  return tags.length > 0 ? (
    <span>
      {startText}
      {matches.map((match, i) => {
        if (match.index) {
          const startIndex = match.index;
          const currentText = match[0];
          const endIndex = startIndex + currentText.length;
          const nextIndex = matches[i + 1]?.index;
          const untilNextText = text.slice(endIndex, nextIndex);
          return (
            <span key={i}>
              <mark>{currentText}</mark>
              {untilNextText}
            </span>
          );
        }
      })}
    </span>
  ) : (
    <span>{text}</span>
  );
};

export default Highlighter;
