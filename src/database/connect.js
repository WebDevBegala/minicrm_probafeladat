const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;