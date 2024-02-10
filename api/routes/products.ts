import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products"
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requests to /products"
  })
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: "You found special shit",
      id: id
    })
  } else {
    res.status(200).json({
      message: "Product ID"
    })
  }
});

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: 'updated'
  });
});

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId;
  res.status(200).json({
    message: 'deleted'
  });
});

export default router;