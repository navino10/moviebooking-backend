const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://localhost:27017/moviesdb'; // Update with your MongoDB URL

db.Artist = require('./artist.model');
db.Genre = require('./genre.model');
db.Movie = require('./movie.model');
db.User = require('./user.model');

module.exports = db;
