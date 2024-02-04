const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  movieid: Number,
  title: String,
  published: Boolean,
  released: Boolean,
  // ... add other fields as needed
  artists: Array,
  genres: Array,
  shows: Array
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
