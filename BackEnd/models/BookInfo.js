const mongoose = require('mongoose');

// Schema used to give some sort of specificity
// Each book has to have these attributes
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
