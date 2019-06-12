const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://SEMANA:Initial1@cluster0-q7f0j.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get('/', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

app.listen(3333);