// require
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');

// init application
const app = express();

// database connection
mongoose.connect('mongodb+srv://SEMANA:Initial1@cluster0-q7f0j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

// exposes the files and its content through URI so the frontend can grab it
const filesPath = path.resolve(__dirname, '..', 'uploads', 'resized');
app.use('/files', express.static(filesPath));

// custom layer / files
app.use(routes);

// attach server to the port
app.listen(3333);