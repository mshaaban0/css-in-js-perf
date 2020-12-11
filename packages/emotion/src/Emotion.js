import { css } from "@emotion/css";

const styles = {
  title: css({
    fontFamily: "Arial",
    fontWeight: "600",
    color: "navy",
    letterSpacing: "1px",
  }),
  text: css({
    fontFamily: "Arial",
    fontSize: "medium",
    color: "black",
    letterSpacing: "1px",
    fontWeight: "500",
    textTransform: "capitalize",
  }),
};

function Emotion() {
  const times = [...Array(1000)];

  return (
    <main>
      <h1 className={styles.title}>Emotion Css</h1>

      {times.map((_, idx) => (
        <h2 key={`item-${idx}`} className={styles.text}>
          Emotion Css Component {idx}
        </h2>
      ))}
    </main>
  );
}

export default Emotion;
