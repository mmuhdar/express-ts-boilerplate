// src/middlewares/errorHandler.ts

import { Request, Response, NextFunction } from 'express';

// Interface untuk Error yang lebih terstruktur
interface HttpError extends Error {
  status?: number;
}

// Middleware untuk menangani error
const errorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Set status code default ke 500 jika tidak ada status yang diberikan
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Log error jika diperlukan (bisa dihubungkan ke logging service)
  console.error(`[Error] ${statusCode}: ${message}`);

  // Kirim response dengan status error dan pesan
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

export default errorHandler;
