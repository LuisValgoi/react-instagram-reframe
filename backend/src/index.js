// require
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// init application
const app = express();

// enabled application to use http
const server = require('http').Server(app);

// enabled application to use websocket
const webSocketIO = require('socket.io')(server);
const routes = require('./routes');

// database connection
mongoose.connect('mongodb+srv://SEMANA:Initial1@cluster0-q7f0j.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

// added a new global 'io' property on each middleware of the app
app.use((req, res, next) => {
  req.io = webSocketIO;

  next(); // forced interceptor/middleware to continue executing what it was doing
});

// exposes the application for any URL/IP/SERVERS
app.use(cors());

// exposes the files and its content through URI so the frontend can grab it
const filesPath = path.resolve(__dirname, '..', 'uploads', 'resized');
app.use('/files', express.static(filesPath));

// custom layer / files
app.use(routes);

// attach server to the port
server.listen(3333);
