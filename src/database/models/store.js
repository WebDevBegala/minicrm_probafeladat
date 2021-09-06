const { Schema } = require('mongoose');
const mongodb = require('../connect')
const storeDetail = new Schema({
    id: String,
    title: String,
    description: String,
    mobile: String,
    email: String,
    address: String
})

const StoreDetail = mongodb.model('storedetails',storeDetail);

module.exports = StoreDetail;