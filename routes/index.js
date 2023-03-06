const express = require('express');

const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const ticketingRouter = require('./ticketingRouter');
const orderRouter = require('./orderRouter');

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/movies', movieRouter);
routes.use('/ticketings', ticketingRouter);
routes.use('/orders', orderRouter);

module.exports = routes;
