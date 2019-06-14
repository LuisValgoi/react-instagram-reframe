const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt'); // order by ASC
        return res.json(posts);
    },

    async store(req, res) {
        // creating variables to be used down there   
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;
        
        // transform filename from png to jpg
        const fileName = image.split('.')[0];
        const filaNameJPG = `${fileName}.jpg`;

        // resize image and saved on the 'uploads/resized' folder
        const filePath = req.file.path;
        const uploadFolderPath = req.file.destination;
        await sharp(filePath)
            .resize(500)
            .jpeg({quality: 70})
            .toFile(path.resolve(uploadFolderPath, 'resized', filaNameJPG));
        
        // removes image from the 'uploads/resized' 
        fs.unlinkSync(filePath);

        // effectively creating an object 
        const post = await Post.create({
            author,
            place,
            description,
            hashtags, 
            image: filaNameJPG
        });

        // exposed through websocket that a new post just happened
        req.io.emit('post', post);

        // returning the info of the posted content
        return res.json(post);
    }
};