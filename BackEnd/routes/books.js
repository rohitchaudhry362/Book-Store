const express = require('express');
const { getBooks, createBook, updateBook } = require('../controllers/books');

// Set up router
const router = express.Router();

// localhost:5000/books/
router.get('/', getBooks);

router.post('/', createBook);

router.patch('/:id', updateBook);

module.exports = router;
