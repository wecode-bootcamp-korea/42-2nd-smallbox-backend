const ticketingService = require('../services/ticketingService');
const seatService = require('../services/ticketingService');
const { catchAsync } = require('../utils/error');

const getOptions = catchAsync(async (req, res) => {
  const options = await ticketingService.getOptions();
  return res.status(200).json({ options });
});

const getSeatsByTimeTableId = catchAsync(async (req, res) => {
  const { timeTableId } = req.params;

  const result = await seatService.getSeatsByTimeTableId(timeTableId);

  if (result.length === 0) {
    const err = new Error('TIMETABLE NOT FOUND');
    err.statusCode = 404;
    throw err;
  }

  return res.status(200).json({ result });
});

const reserveTicket = catchAsync(async (req, res) => {
  const { timeTableSeatId } = req.body;
  const userId = req.user;

  await seatService.reserveTicket(userId, timeTableSeatId);
  return res.status(201).json({ message: 'TICKET RESERVED SUCCESSFULLY' });
});

const cancelReservedSeat = catchAsync(async (req, res) => {
  const { timeTableSeatId } = req.body;
  const userId = req.user;

  await seatService.cancelReservedSeat(userId, timeTableSeatId);

  return res.status(200).json({ message: 'TICKET CANCEL SUCCESSFULLY' });
});

const getTicketingDetails = catchAsync(async (req, res) => {
  const userId = req.user;

  if (!userId) throw new Error('keyErr');

  const ticketingDetails = await ticketingService.getTicketingDetails(userId);

  return res.status(200).json({ ticketingDetails });
});

module.exports = {
  getOptions,
  getSeatsByTimeTableId,
  cancelReservedSeat,
  reserveTicket,
  getTicketingDetails,
};
