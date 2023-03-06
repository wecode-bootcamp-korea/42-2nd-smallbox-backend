const orderDao = require('../models/orderDao');

const createOrder = async (paymentData, userId) => {
  return orderDao.createOrder(paymentData, userId);
};

module.exports = { createOrder };
