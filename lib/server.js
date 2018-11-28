import express from 'express';
import config from './config';
import serverRender from './server-render';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const view = serverRender();
  res.render('index', { rootApp: view });
});

app.listen(config.port, () =>
  console.log(`App is running http://localhost:${config.port}`)
);
