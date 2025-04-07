# FundFinder Backend API

This is the backend API for the FundFinder application, which helps users find and track funding opportunities.

## Features

- RESTful API for funding opportunities
- JWT authentication (placeholder)
- Sample data for demonstration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file with the following variables:

```
PORT=5000
NODE_ENV=development
JWT_SECRET=your_secret_key
```

5. Start the development server:

```bash
npm run dev
```

## API Endpoints

- `GET /api/funding` - Get all funding opportunities
- `GET /api/funding/:id` - Get a specific funding opportunity by ID

## Deployment

This API is configured for deployment to Render.com using the provided `render.yaml` file.
