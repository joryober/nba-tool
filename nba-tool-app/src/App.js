import "./App.css";
import React, { useEffect, useState } from "react";
import Start from ".//Start.js";

function App() {
  const [startIsShown, setStartIsShown] = useState(false);
  return (
    <div class="main-section">
      <h1>NBA Tool</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias
        nobis incidunt minima molestiae, sequi culpa, deleniti quas error,
        quidem debitis eveniet quis at placeat doloribus unde dicta doloremque
        rem.
      </p>

      <button onClick={() => setStartIsShown(true)}>Start</button>
      {startIsShown && <Start />}
    </div>
  );
}

export default App;
