// require
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// init application
const app = express();

// database connection
mongoose.connect('mongodb+srv://SEMANA:Initial1@cluster0-q7f0j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// custom layer / files
app.use(routes);

// attach server to the port
app.listen(3333);