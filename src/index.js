/**
 * Sample Node.js Application
 * Entry point for the application
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost'
};

// Load sample data
function loadSampleData() {
  const dataDir = path.join(__dirname, '../data');
  const users = JSON.parse(fs.readFileSync(path.join(dataDir, 'users.json'), 'utf8'));
  const products = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf8'));
  return { users, products };
}

// Create HTTP server
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Route handlers
  if (req.url === '/api/users' && req.method === 'GET') {
    try {
      const { users } = loadSampleData();
      res.writeHead(200);
      res.end(JSON.stringify(users, null, 2));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Failed to load users' }));
    }
  } else if (req.url === '/api/products' && req.method === 'GET') {
    try {
      const { products } = loadSampleData();
      res.writeHead(200);
      res.end(JSON.stringify(products, null, 2));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Failed to load products' }));
    }
  } else if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: 'Welcome to Sample App',
      version: '1.0.0',
      endpoints: [
        '/api/users',
        '/api/products'
      ]
    }, null, 2));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

// Start server
server.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`);
  console.log('Available endpoints:');
  console.log(`  - GET http://${config.host}:${config.port}/`);
  console.log(`  - GET http://${config.host}:${config.port}/api/users`);
  console.log(`  - GET http://${config.host}:${config.port}/api/products`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = server;
