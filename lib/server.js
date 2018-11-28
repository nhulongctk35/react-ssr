import express from 'express';
import config from './config';
import serverRender from './server-render';
const articleData = require('./../mock-data/test-data');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const view = serverRender();
  res.render('index', { rootApp: view });
});

app.get('/api/articles', (req, res) => {
  res.send(articleData);
});

app.listen(config.port, () =>
  console.log(`App is running http://localhost:${config.port}`)
);
