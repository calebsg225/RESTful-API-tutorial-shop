import express from 'express';
import chalk from '../../node_modules/chalk/source/index';
const router = express.Router();

router.get('/', (req, res, next) => {
  chalk
  res.status(200).json({
    message: "orders were fetched"
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  }
  res.status(201).json({
    message: "orders were posted",
    order: order
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "order has been fetched",
    orderId: req.params.orderId
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: "order deleted",
    orderId: req.params.orderId
  });
});

export default router;