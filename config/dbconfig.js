const mongoose = require('mongoose');

var url = 'mongodb+srv://rushabhdholakia05:RSIhEqmIJaT0A5YG@bookscluster.kqa7vma.mongodb.net/';

const connection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch((e) => {
    console.log(e);
});

module.exports = connection;

