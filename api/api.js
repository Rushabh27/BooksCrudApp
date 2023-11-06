const router = require('express').Router();
const bookModel = require('../model/book_model');

router.get('/books', async function (req, res) {
    const bookList = await bookModel.book.find();
    console.log(bookList);
    res.send(bookList);
});

router.get('/books/:id', async function (req, res) {
    const { id } = req.params;

    const book = await bookModel.book.find({ Book_id: Number(id) });
    console.log(typeof (id), book);
    if (!book) return res.send("Book Not Found");
    res.send(book);
});

router.post('/books', async function (req, res) {
    const Title = req.body.title;
    const Summary = req.body.summary;
    const Author = req.body.author;
    const bookExist = await bookModel.book.find();
    console.log(bookExist);
    // console.log(bookExist[0].Book_id);
    let id = 0;

    if (bookExist && bookExist.length > 0) id = bookExist[0].Book_id + 1;

    var data = await bookModel.book.create({ Title, Author, Summary, Book_id: id });
    data.save();

    res.send("Book Uploaded");
});


router.put('/books/:id', async function (req, res) {
    const { id } = req.params;
    const {
        title,
        author,
        summary
    } = req.body;

    const bookExist = await bookModel.book.findOne({ Book_id: id });
    if (!bookExist) return res.send('Book Do Not exist');


    const updateField = (val, prev) => !val ? prev : val;

    const updatedBook = {
        ...bookExist,
        title: updateField(title, bookExist.title),
        author: updateField(author, bookExist.author),
        summary: updateField(summary, bookExist.summary),

    };

    await bookModel.book.updateOne({ Book_id: id }, { $set: { Title: updatedBook.title, Author: updatedBook.author, Summary: updatedBook.summary } })

    res.status(200).send("Book Updated");
});

router.delete('/books/:id', async function (req, res) {
    const { id } = req.params;

    const bookExist = await bookModel.book.findOne({ Book_id: id });
    if (!bookExist) return res.send('Book Do Not exist');

    await bookModel.book.deleteOne({ Book_id: id }).then(function () {
        console.log("Data deleted"); // Success
        res.send("Book Record Deleted Successfully")
    }).catch(function (error) {
        console.log(error); // Failure
    });
});

module.exports = router;