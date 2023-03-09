const orderService = require('../services/orderService');
const { catchAsync } = require('../utils/error');

const createOrder = catchAsync(async (req, res) => {
  const { paymentData } = req.body;
  const userId = req.user;

  const orderNumber = await orderService.createOrder(paymentData, userId);

  return res.status(200).json({ orderNumber });
});

module.exports = {
  createOrder,
};
