const Post = require('../models/Post');

module.exports = {
    async index(req, res) {

    },

    async store(req, res) {
        console.log('============ BODY');
        console.log(req.body);
        console.log('============ FILE');
        console.log(req.file);
        
        return res.json({
            ok: true
        });
    }
};