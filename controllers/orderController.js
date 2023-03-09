const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createOrder = catchAsync(async (req, res) => {
  const { paymentData } = req.body;
  const userId = req.user;

  const orderNumber = await orderService.createOrder(paymentData, userId);

  return res.status(200).json({ orderNumber });
});

const getOrder = catchAsync(async (req, res) => {
  const userId = req.user;
  const { orderNumber } = req.query;

  if (!userId && !orderNumber) throw new Error('keyErr');

  const orders = await orderService.getOrder(userId, orderNumber);

  return res.status(200).json(orders);
});

module.exports = {
  createOrder,
  getOrder,
};
