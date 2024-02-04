const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
  artistid: Number,
  first_name: String,
  last_name: String,
  wiki_url: String,
  profile_url: String,
  movies: Array
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
