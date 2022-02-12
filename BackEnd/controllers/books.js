const mongoose = require('mongoose');

const BookInfo = require('../models/BookInfo');

exports.getBooks = async (req, res) => {
  try {
    const bookInfo = await BookInfo.find();
    console.log(bookInfo);
    res.status(200).json(bookInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    console.log(req.body);
    const book = req.body;
    const newBook = new BookInfo(book);
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const _id = req.params.id;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send('No book found with given id');
    }

    // new:true so that it can return updated book
    const updatedBook = await BookInfo.findByIdAndUpdate(_id, book, {
      new: true,
    });

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
