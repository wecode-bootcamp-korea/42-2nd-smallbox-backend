const orderDao = require('../models/orderDao');
const { v4: uuidv4 } = require('uuid');

const createOrder = async (paymentData, userId) => {
  const orderNumber = uuidv4();
  console.log(orderNumber);
  await orderDao.createOrder(paymentData, userId, orderNumber);
  return orderNumber;
};

module.exports = { createOrder };
