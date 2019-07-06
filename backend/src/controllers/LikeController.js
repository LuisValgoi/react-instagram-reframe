const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    // get the image ID by URL
    const { id } = req.params;

    // get the post according to the give id
    const post = await Post.findById(id);

    // incremented its likes
    post.likes += 1;

    // saved the object
    await post.save();

    // exposed through websocket that a new like of a post just happened
    req.io.emit('like', post);

    return res.json(post);
  },
};
