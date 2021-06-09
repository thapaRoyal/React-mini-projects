import React, { useState } from "react";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world");
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum ?</h3>
      <form action="#" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          possimus. Facilis impedit delectus dolorem ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          possimus. Facilis impedit delectus dolorem ratione?
        </p>
      </article>
    </section>
  );
}

export default App;
