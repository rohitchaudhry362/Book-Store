const mongoose = require('mongoose');
const BookInfo = require('../models/BookInfo');

// @desc     Get all Books
// @router   GET /books/
exports.getBooks = async (req, res) => {
  try {
    const bookInfo = await BookInfo.find();
    res.status(200).json(bookInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc     Create new book
// @router   POST /books
exports.createBook = async (req, res) => {
  try {
    const book = req.body;
    const newBook = new BookInfo(book);
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc     Update a book by ID
// @router   PATCH /books/:id
exports.updateBook = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No book found with given id');
  }

  try {
    const book = req.body;
    const updatedBook = await BookInfo.findByIdAndUpdate(_id, book, {
      new: true,
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc     Delete a book by ID
// @router   PATCH /books/:id
exports.deleteBook = async (req, res) => {
  const _id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No book found with given id');
  }
  try {
    await BookInfo.findByIdAndRemove(_id);

    res.status(200).json({ message: 'Book deleted succesfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
