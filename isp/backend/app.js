const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the isp module!');
});

app.listen(port, () => {
  console.log(`isp module is running on port ${port}`);
});
