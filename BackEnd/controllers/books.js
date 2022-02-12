const BookInfo = require('../models/BookInfo');

exports.getBooks = async (req, res) => {
  try {
    const bookInfo = await BookInfo.find().sort('title');
    console.log(bookInfo);
    res.status(200).json(bookInfo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    console.log('We are here');
    console.log(req.body);
    const book = req.body;
    const newBook = new BookInfo(book);
    await newBook.save();
    res.status(200).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
