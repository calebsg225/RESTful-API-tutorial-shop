import express from 'express';
const app = express();

app.use((req, res, next) => { // sets up middleware: incoming request has to go through app and what you pass through it
  res.status(200).json({
    message: 'It works!!'
  });
});

export default app;