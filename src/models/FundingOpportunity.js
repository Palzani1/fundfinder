const mongoose = require('mongoose');

const fundingOpportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  organization: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  },
  eligibility: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  applicationUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Note: This model is not actually used in our simple example,
// but would be used in a real application with a database
const FundingOpportunity = mongoose.model('FundingOpportunity', fundingOpportunitySchema);

module.exports = FundingOpportunity;
