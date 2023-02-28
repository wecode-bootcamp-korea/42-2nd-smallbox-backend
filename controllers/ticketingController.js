const seatService = require('../services/ticketingService');
const { catchAsync } = require('../utils/error');

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

module.exports = {
  getSeatsByTimeTableId,
  cancelReservedSeat,
  reserveTicket,
};
