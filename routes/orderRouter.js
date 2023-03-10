const express = require('express');

const orderController = require('../controllers/orderController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/payment', validateToken, orderController.createOrder);
router.get('', validateToken, orderController.getOrder);

module.exports = router;
