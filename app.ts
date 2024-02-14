import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import productRoutes from './api/routes/products';
import orderRoutes from './api/routes/orders';
import chalk from 'chalk';
import bodyParser from 'body-parser';

const app = express();

// log request data to terminal
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// prevent cors errors
// cors is enforced by the browser, therefore we can send headers to circumvent
app.use((req, res, next) => {
  // '*' gives access to all clients. Replace with specific url(s) to limit access to api.
  res.header('Access-Control-Allow-Origin', '*');
  // gives client access to specified headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // options request is just for finding out which options we have
  if (req.method === 'OPTIONS') {
    // gives client access to specified request methods
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
})

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req: Request, res: Response, next: NextFunction): void => {
  const error = new Error('Route not found.');
  const status = 404;
  next({error, status});
});

interface ErrorData {
  error: Error,
  status: number
}

app.use(({error, status}: ErrorData, req: Request, res: Response, next: NextFunction): void => {
  res.status(status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;