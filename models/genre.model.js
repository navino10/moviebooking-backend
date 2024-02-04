const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
  genreid: Number,
  genre: String
});

const Genre = mongoose.model('Genre', GenreSchema);

module.exports = Genre;
