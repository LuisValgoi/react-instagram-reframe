const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        // get the image ID by URL
        const id = req.params.id;
        
        // get the post according to the give id
        const post = await Post.findById(id);

        // incremented its likes
        post.likes += 1;

        // saved the object
        await post.save();

        return res.json(post);
    }
};