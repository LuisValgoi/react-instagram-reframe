const express = require('express');
const PostController = require('./controllers/PostController');

const routes = new express.Router();

routes.get('/user', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

routes.post('/posts', PostController.store);

module.exports = routes;