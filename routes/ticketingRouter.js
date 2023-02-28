const express = require('express');

const ticketingController = require('../controllers/ticketingController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.get('', ticketingController.getOptions);
router.get('/:timeTableId', ticketingController.getSeatsByTimeTableId);
router.post(
  '/seats/reservation',
  validateToken,
  ticketingController.reserveTicket
);
router.patch(
  '/seats/cancelation',
  validateToken,
  ticketingController.cancelReservedSeat
);

module.exports = router;
