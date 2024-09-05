// src/index.ts
import dotenv from 'dotenv';
import app from './app';

// Load environment variables from .env file, if available
dotenv.config();

const PORT = process.env.PORT || 3000; // Gunakan port dari environment atau default ke 3000

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
