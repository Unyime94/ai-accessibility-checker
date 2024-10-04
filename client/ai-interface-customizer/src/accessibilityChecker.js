import React, { useState, useEffect } from "react";
import axe from "axe-core";

const AccessibilityChecker = ({ html }) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    axe.run(html, (err, results) => {
      if (err) throw err;
      setResults(results);
    });
  }, [html]);

  return (
    <div>
      <h2>Accessibility Results</h2>
      {results && results.violations.length > 0 ? (
        <ul>
          {results.violations.map((violation) => (
            <li key={violation.id}>
              <strong>{violation.description}</strong>
              <ul>
                {violation.nodes.map((node, index) => (
                  <li key={index}>{node.failureSummary}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No accessibility issues found!</p>
      )}
    </div>
  );
};

export default AccessibilityChecker;
