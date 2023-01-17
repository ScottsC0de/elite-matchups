// const routes = require('matchup-routes.js');
// app.use(routes);
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// route files we workin with
const htmlRoutes = require('./routes/htmlRoutes');
const matchupRoutes = require('./routes/matchupRoutes');
app.use('/', htmlRoutes);
app.use('/matchup', matchupRoutes);

// heroku port
const PORT = process.env.PORT || 3001;

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`I hears you at port ${PORT} 💩`));