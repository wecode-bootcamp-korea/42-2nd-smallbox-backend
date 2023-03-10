const express = require('express');

const ticketingController = require('../controllers/ticketingController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

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
router.get('/details', validateToken, ticketingController.getTicketingDetails);
router.get('', ticketingController.getOptions);

module.exports = router;
