const express = require('express');

const userRouter = require('./userRouter');
const movieRouter = require('./movieRouter');
const ticketingRouter = require('./ticketingRouter');

const routes = express.Router();

routes.use('/users', userRouter);
routes.use('/movies', movieRouter);
routes.use('/ticketings', ticketingRouter);

module.exports = routes;
