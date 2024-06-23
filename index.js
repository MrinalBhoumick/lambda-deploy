const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Array of quotes
const quotes = [
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Route to handle random quote requests
app.get('/random-quote', (req, res) => {
  const quote = getRandomQuote();
  res.json(quote);
});

// Export the serverless handler
module.exports.handler = serverless(app);
