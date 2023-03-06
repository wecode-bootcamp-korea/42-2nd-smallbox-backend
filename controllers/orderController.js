const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createOrder = catchAsync(async (req, res) => {
  const { paymentData } = req.body;
  const userId = req.user;

  await orderService.createOrder(paymentData, userId);

  return res.status(201).json({ message: 'YOUR ORDER IS COMPLETED!!' });
});

module.exports = {
  createOrder,
};
