import React, { useState } from "react";

const URLInputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">Enter Website URL or HTML/CSS:</label>
      <input
        type="text"
        id="url"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Analyze Accessibility</button>
    </form>
  );
};

export default URLInputForm;
