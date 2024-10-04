import React, { useState } from "react";
import "./App.css";
import URLInputForm from "./form";

function App() {
  const [html, setHtml] = useState("");

  const handleSubmit = (input) => {
    setHtml(input);
  };

  return (
    <div className="App">
      <URLInputForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
