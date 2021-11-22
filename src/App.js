import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [universitie, setUnversite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => response.json())
      .then((data) => setUnversite(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="container">
      {universitie && universitie.map((univer) => <Card univer={univer} />)}
      {error && setError(error)}
    </div>
  );
}

export default App;
