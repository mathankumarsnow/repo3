# Repo3

This is a test repository with sample data.

## Overview

Welcome to Repo3! This repository contains sample data and a starter Node.js application for demonstration purposes.

## Features

- ✅ Sample configuration management
- ✅ Example data structures (users & products)
- ✅ Working Node.js HTTP server
- ✅ RESTful API endpoints
- ✅ Professional project structure

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/mathankumarsnow/repo3.git
cd repo3

# Start the server
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

- `GET /` - Welcome message and available endpoints
- `GET /api/users` - Get list of sample users
- `GET /api/products` - Get list of sample products

## Sample Data

### Users
- Alice Johnson (admin)
- Bob Smith (user)
- Carol White (user)

### Products
- Laptop ($999.99)
- Wireless Mouse ($29.99)
- USB-C Cable ($12.99)
- Monitor ($349.99)

## Project Structure

```
repo3/
├── README.md                 # This file
├── package.json             # Project configuration
├── .gitignore              # Git ignore rules
├── config/
│   └── config.yaml         # Application configuration
├── data/
│   ├── users.json         # Sample user data
│   └── products.json      # Sample product data
└── src/
    └── index.js           # Main application file
```

## Configuration

The application uses `config/config.yaml` for configuration. Key settings:
- **Server Port**: 3000
- **Host**: localhost
- **CORS**: Enabled for development
- **Database**: PostgreSQL (configured but not required for demo)

## Development

### Available npm scripts:
```bash
npm start    # Start the server
npm run dev  # Start with auto-reload (requires --watch flag support)
npm test     # Run tests
```

## Contributing

Contributions are welcome! Feel free to:
- Add more sample data
- Extend API endpoints
- Improve documentation
- Add test cases

## License

MIT License - see LICENSE file for details

## Author

Created by mathankumarsnow
