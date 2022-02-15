const express = require('express');
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/books');

// Set up router
const router = express.Router();

// localhost:5000/books/
router.get('/', getBooks);

// localhost:5000/books/
router.post('/', createBook);

// localhost:5000/books/:id
router.patch('/:id', updateBook);

// localhost:5000/books/:id
router.delete('/:id', deleteBook);

module.exports = router;
