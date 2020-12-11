import "./Css.css";

function Css() {
  const times = [...Array(1000)];

  return (
    <main>
      <h1 className="title">Native Css</h1>

      {times.map((_, idx) => (
        <h2 key={`item-${idx}`} className="text">
          Native Css Component {idx}
        </h2>
      ))}
    </main>
  );
}

export default Css;
