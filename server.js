const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const htmlRoutes = require('./routes/htmlRoutes');
const matchupRoutes = require('./routes/matchupRoutes');
app.use('/', htmlRoutes);
app.use('/matchup', matchupRoutes);

const PORT = process.env.PORT || 3001; // heroku

app.listen(PORT, () => console.log(`I hear you at port ${PORT} 💩`));