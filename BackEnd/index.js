const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const bookRoutes = require('./routes/books');

// Initialize express app
const app = express();

// Body parser
app.use(express.json());

// Enable cors
app.use(cors());

app.use('/books', bookRoutes);

const CONNECTION_URL = 'mongodb://localhost/book_store';
const PORT = process.env.PORT || 5000;

// Database connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
