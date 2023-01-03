const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/data', (req, res) => {
    const data = api.get();
    res.send(data);
  });
  
  app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const data = api.getById(id);
    res.send(data);
  });

  app.post('/data', (req, res) => {
    const item = req.body;
    api.insert(item);
    res.send(item);
  });

  app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    api.deleteById(id);
    res.send(id);
  });
  
  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
