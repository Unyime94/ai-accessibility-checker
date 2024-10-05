const express = require("express");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();
const port = 5000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.post("/api/getSuggestions", async (req, res) => {
  try {
    const { violations } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an accessibility expert." },
        {
          role: "user",
          content: `Suggest accessibility improvements for the following violations: ${JSON.stringify(
            violations
          )}`,
        },
      ],
    });
    res.json(response.choices[0].message.content);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
