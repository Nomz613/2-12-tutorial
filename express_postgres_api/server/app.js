const { application } = require("express");

const express = require('express');
const bodyParser = require('body-parser');
const query = require('./query');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/films', (query.getUsers));