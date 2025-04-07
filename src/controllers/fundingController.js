// Sample funding opportunities data
const fundingOpportunities = [
  {
    id: '1',
    title: 'Small Business Innovation Grant',
    organization: 'National Science Foundation',
    amount: 150000,
    deadline: '2025-06-30',
    eligibility: 'Small businesses with fewer than 50 employees',
    description: 'Funding for innovative research and development projects with commercial potential.',
    applicationUrl: 'https://example.com/nsf-sbir'
  },
  {
    id: '2',
    title: 'Community Development Block Grant',
    organization: 'Department of Housing and Urban Development',
    amount: 500000,
    deadline: '2025-07-15',
    eligibility: 'Local governments and non-profit organizations',
    description: 'Funding for community development projects that benefit low and moderate income residents.',
    applicationUrl: 'https://example.com/hud-cdbg'
  },
  {
    id: '3',
    title: 'Clean Energy Research Grant',
    organization: 'Department of Energy',
    amount: 250000,
    deadline: '2025-08-01',
    eligibility: 'Research institutions and private companies',
    description: 'Funding for research and development of clean energy technologies.',
    applicationUrl: 'https://example.com/doe-cerg'
  }
];

// Get all funding opportunities
const getFundingOpportunities = (req, res) => {
  res.json(fundingOpportunities);
};

// Get a specific funding opportunity by ID
const getFundingOpportunityById = (req, res) => {
  const { id } = req.params;
  const opportunity = fundingOpportunities.find(opp => opp.id === id);
  
  if (!opportunity) {
    return res.status(404).json({ message: 'Funding opportunity not found' });
  }
  
  res.json(opportunity);
};

module.exports = {
  getFundingOpportunities,
  getFundingOpportunityById
};
