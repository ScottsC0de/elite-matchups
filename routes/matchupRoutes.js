// app.get('/') show score
// app.put('/score') update score

// www.elite-matchups.sg.herokuapp.com/score

// import and initiate express.js by storing it in an "app" variable
const express = require('express')
const app = express();
// const uuid = require('uuid');

// import db file
const data = require('db.json');

// import file system and file paths
const fs = require('fs');
const path = require('path');

// get() method - post the scores to the page
app.get('/score', (req, res) => {
    res.json(data);
});

// post() method - add 1 to either score
app.post('/score', (req, res) => {
    req.body.id = uuid.v4();
    data.push(req.body);
    res.json(data);
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log('score is live'));
});

module.exports = app;