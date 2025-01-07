const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).send('User ID is required');
  }
  // ...some database operations to fetch user details...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// ...other routes...