const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('matchup-routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// mounting Middleware before using any Express methods
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse URL encoded data

// serve static 'public' folder
app.use(express.static('public'));

// create variables for the routes were working with
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// mount our routes files
// use sets the path
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`Express is servin' it up at Port ${PORT} 🚀`));