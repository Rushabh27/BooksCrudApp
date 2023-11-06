const mongoose = require('mongoose');
const db = require('../config/dbconfig');

const bookSchema = new mongoose.Schema({
    Book_id: { type: Number },
    Title: { type: String },
    Author: { type: String },
    Summary: { type: String }
});

const bookmodel = mongoose.model('Books', bookSchema, 'Books');

module.exports = { book: bookmodel };