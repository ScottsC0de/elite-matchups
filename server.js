// const routes = require('matchup-routes.js');
// app.use(routes);
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static 'public' folder
app.use(express.static('public'));

// res.send html file 
// app.get('/') servin html

// app.get('/') show score
// app.put('/score') update score

// route files we woykin with
const matchupRoutes = require('./routes/matchupRoutes');
app.use('/matchup', matchupRoutes);

// heroku port
const PORT = process.env.PORT || 3001;

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`Dookie hears you at port ${PORT} 💩`));