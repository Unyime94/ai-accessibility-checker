import React, { useState } from "react";
import "./App.css";
import URLInputForm from "./form";
import AccessibilityChecker from "./accessibilityChecker";
import { getAccessibilitySuggestions } from "./accessibilitySuggestions";

function App() {
  const [html, setHtml] = useState("");
  const [violations, setViolations] = useState(null);
  const [suggestions, setSuggestions] = useState("");

  const handleSubmit = (input) => {
    setHtml(input);
  };

  const handleViolations = async (violations) => {
    setViolations(violations);
    const suggestions = await getAccessibilitySuggestions(violations);
    setSuggestions(suggestions);
  };

  return (
    <div className="App">
      <URLInputForm onSubmit={handleSubmit} />
      {html && (
        <AccessibilityChecker html={html} onViolations={handleViolations} />
      )}
    </div>
  );
}

export default App;
