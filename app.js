const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { globalErrorhandler } = require('./utils/error');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('tiny'));

  app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.statusCode = 404;
    next(err);
  });

  app.use(globalErrorhandler);

  // health check
  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
  });

  return app;
};

module.exports = { createApp };
