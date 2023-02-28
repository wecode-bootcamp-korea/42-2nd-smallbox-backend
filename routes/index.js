const express = require('express');

const routes = express.Router();

const movieRouter = require('./movieRouter');
const userRouter = require('./userRouter');
const ticketingRouter = require('./ticketingRouter');

routes.use('/movies', movieRouter);
routes.use('/users', userRouter);
routes.use('/ticketings', ticketingRouter);

module.exports = routes;
