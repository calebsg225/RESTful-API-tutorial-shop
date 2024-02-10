import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import productRoutes from './api/routes/products';
import orderRoutes from './api/routes/orders';
import chalk from 'chalk';
const app = express();

// log request data to terminal
app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Route not found.');
  error.status = 404;
  next(error);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction): void => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

export default app;