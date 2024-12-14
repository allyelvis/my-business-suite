const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the hospitality module!');
});

app.listen(port, () => {
  console.log(`hospitality module is running on port ${port}`);
});
