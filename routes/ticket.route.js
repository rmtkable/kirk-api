const router = require('express').Router();
let Ticket = require('../models/ticket.model');


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const messageBody = req.body.messageBody;
  


  const newTicket = new Ticket({
    name,
    email,
    subject,
    messageBody,
  });


  newTicket.save()
  .then(() => res.json('Message Sent!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;