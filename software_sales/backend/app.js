const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the software_sales module!');
});

app.listen(port, () => {
  console.log(`software_sales module is running on port ${port}`);
});
