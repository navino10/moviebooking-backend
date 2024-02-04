// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 9000;

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });




// Dynamic Routes
app.get('/movies', (req, res) => {
  res.json(`All Movies Data in JSON format from Mongo DB`);
});

app.get('/genres', (req, res) => {

  res.json(`All Genres Data in JSON format from Mongo DB`);
});

app.get('/artists', (req, res) => {
  res.json(`All Artists Data in JSON format from Mongo DB` );
});


app.listen(9000, () => {
  console.log(`Server is running on port `);
});
