const express = require('express');
const { getBooks, createBook } = require('../controllers/books');

// Set up router
const router = express.Router();

// localhost:5000/books/
router.get('/', getBooks);

router.post('/', createBook);

module.exports = router;
