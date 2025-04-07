const express = require('express');
const { getFundingOpportunities, getFundingOpportunityById } = require('../controllers/fundingController');

const router = express.Router();

// Get all funding opportunities
router.get('/', getFundingOpportunities);

// Get a specific funding opportunity by ID
router.get('/:id', getFundingOpportunityById);

module.exports = {
  fundingRoutes: router
};
