const express = require('express');
const router = express.Router();

// Define sector-specific routes
// Example: For retail, you can add routes for inventory, POS, etc.
router.get('/isp/info', (req, res) => {
  res.json({ message: 'isp API is working!' });
});

module.exports = router;
