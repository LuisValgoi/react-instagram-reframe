const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();

routes.get('/user', (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});

routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;