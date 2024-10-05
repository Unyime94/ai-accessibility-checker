const getAccessibilitySuggestions = async (violations) => {
  try {
    const response = await fetch("/api/getSuggestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ violations }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return "Unable to fetch suggestions at this time.";
  }
};
