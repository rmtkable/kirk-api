const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const ticketSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: false },
  messageBody: { type: String, required: true },
  date: { type: Date, required: false },
}, {
  timestamps: true,
});


const Ticket = mongoose.model('clientTickets', ticketSchema);


module.exports = Ticket;