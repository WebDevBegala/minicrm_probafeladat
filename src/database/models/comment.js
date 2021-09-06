const { Schema } = require('mongoose');
const mongodb = require('../connect')
const comment = new Schema({
    id: String,
    storeId: Number,
    author: String,
    date: {type: Date,default: Date.now},
    description: String,
    rating: Number,
})

const Comment = mongodb.model('comments',comment);

module.exports = Comment;