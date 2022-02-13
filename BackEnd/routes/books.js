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

router.post('/', createBook);

router.patch('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;
