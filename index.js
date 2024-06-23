const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

app.get('/checkserver', (req, res) => {
  res.send('Server is up');
});

module.exports.handler = serverless(app);
