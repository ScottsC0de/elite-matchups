// res.send html file - app.get('/') servin html

// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();

// access file paths
const path = require('path');

// get() initial matchup page
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/matchup.html'))
);

module.exports = app;