const ticket = require('./models/ticket.model')
const Ticket = require("./models/ticket.model")
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://JDKA:password1234@cluster0.c811qja.mongodb.net/CAPSTONEPROJECTCONTACTFORM';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const ticketRouter = require('./routes/ticket.route');
const sportsRouter = require('./routes/sports.routes')
app.use('/ticket', ticketRouter);
app.use('/sports', sportsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});