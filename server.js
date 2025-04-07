require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { fundingRoutes } = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/funding', fundingRoutes);

// Root route for health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'FundFinder API is running',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
