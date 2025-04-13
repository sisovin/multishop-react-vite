import dotenv from 'dotenv';
import app from './src/app.js';  // Added .js extension for ESM imports

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});