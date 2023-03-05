const seatDao = require('../models/seatDao');
const ticketingDao = require('../models/ticketingDao');

const getOptions = async () => {
  const movies = await ticketingDao.getMovies();
  const timetables = await ticketingDao.getTimetables();

  return {
    movies: movies,
    timetables: timetables,
  };
};

const seperateTickets = async (seatId, func) => {
  for (let i = 0; i < seatId.length; i++) {
    await func(seatId[i]);
  }
};

const seperateTicketsWithUser = async (seatId, userId, func) => {
  for (let i = 0; i < seatId.length; i++) {
    await func(userId, seatId[i]);
  }
};

const getSeatsByTimeTableId = async (timeTableId) => {
  return ticketingDao.getSeatsByTimeTableId(timeTableId);
};

const reserveTicket = async (userId, timeTableSeatId) => {
  const updateSeatStatus = async () => {
    await seperateTickets(timeTableSeatId, seatDao.updateSeatStatus);
  };

  const addTickets = async () => {
    await seperateTicketsWithUser(
      timeTableSeatId,
      userId,
      ticketingDao.reserveTicket
    );
  };

  await updateSeatStatus();
  await addTickets();
};

const cancelReservedSeat = async (userId, timeTableSeatId) => {
  const cancelTickets = async () => {
    await seperateTickets(timeTableSeatId, seatDao.cancelReservedSeat);
  };

  const removeTicket = async () => {
    await seperateTicketsWithUser(
      timeTableSeatId,
      userId,
      ticketingDao.deleteTicket
    );
  };
  await cancelTickets();
  await removeTicket();
};

const getTicketingDetails = async (userId) => {
  return ticketingDao.getTicketingDetails(userId);
};

module.exports = {
  getOptions,
  getSeatsByTimeTableId,
  reserveTicket,
  cancelReservedSeat,
  getTicketingDetails,
};
