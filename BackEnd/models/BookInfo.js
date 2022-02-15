const mongoose = require('mongoose');

// Schema for book table
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a book title'],
  },
  description: String,
  author: {
    type: String,
    required: [true, 'Please add author name for book'],
  },
  tags: [String],
});

const BookInfo = mongoose.model('BookInfo', bookSchema);

module.exports = BookInfo;
