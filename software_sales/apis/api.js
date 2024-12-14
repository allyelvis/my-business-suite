const express = require('express');
const router = express.Router();

// Define sector-specific routes
// Example: For retail, you can add routes for inventory, POS, etc.
router.get('/software_sales/info', (req, res) => {
  res.json({ message: 'software_sales API is working!' });
});

module.exports = router;
