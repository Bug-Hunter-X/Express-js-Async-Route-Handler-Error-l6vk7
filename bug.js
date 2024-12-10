const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some asynchronous operation to fetch user data ...
  res.send({ userId });
});

// Problem: If the asynchronous operation fails, the response is never sent.
// This leads to the client waiting indefinitely for a response.