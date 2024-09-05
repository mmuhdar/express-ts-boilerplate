import express from 'express';
import userRoutes from './routes/user.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes); // Mengatur routing user

// Middleware untuk menangani error
app.use(errorHandler);

export default app;
