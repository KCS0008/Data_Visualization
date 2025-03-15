import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Enable CORS
app.use(cors());

// Health check endpoint for AWS
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

// Proxy API requests
app.use('/api', createProxyMiddleware({
  target: process.env.API_URL || 'http://localhost:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api'
  }
}));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  console.log(`API URL: ${process.env.API_URL || 'http://localhost:8080'}`);
});
