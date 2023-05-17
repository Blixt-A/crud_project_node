const express = require('express');
const router = express.Router();

// API keys
const validApiKeys = ["10", "20", "30"];

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({ message: "Your API key is missing." });
  }

  if (!validApiKeys.includes(apiKey)) {
    return res.status(403).json({ message: "Invalid API key" });
  }
  next();
};

// Add a new API key

router.post("/", (req, res) => {
  const apiKey = req.body.apiKey;

  if (!apiKey) {
    return res.status(400).json({ message: "API key is required." });
  }

  if (validApiKeys.includes(apiKey)) {
    return res.status(400).json({ message: "API key already exists." });
  }

  validApiKeys.push(apiKey);
  res.status(200).json({ message: "API key added successfully." });
});

// Remove API key 

router.delete("/", (req, res) => {
  const apiKey = req.body.apiKey;

  if (!apiKey) {
    return res.status(400).json({ message: "API key is required." });
  }

  const apiKeyIndex = validApiKeys.indexOf(apiKey);

  if (apiKeyIndex === -1) {
    return res.status(400).json({ message: "API key does not exist." });
  }

  validApiKeys.splice(apiKeyIndex, 1);
  res.status(200).json({ message: "API key removed successfully." });
});

module.exports = router;
