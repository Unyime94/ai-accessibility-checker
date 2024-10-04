import React, { useState } from "react";
import "./App.css";
import URLInputForm from "./form";
import AccessibilityChecker from "./accessibilityChecker";

function App() {
  const [html, setHtml] = useState("");

  const handleSubmit = (input) => {
    setHtml(input);
  };

  return (
    <div className="App">
      <URLInputForm onSubmit={handleSubmit} />
      {html && <AccessibilityChecker html={html} />}
    </div>
  );
}

export default App;
