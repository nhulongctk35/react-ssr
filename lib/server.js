const express = require('express');
const config = require('../config');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));

app.listen(config.port, () =>
  console.log(`App is running at http://localhost:${config.port}`)
);
