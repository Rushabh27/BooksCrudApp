const bodyParser = require('body-parser');
const express = require('express');
const api = require('./api/api');

const app = express();

// app.set('view engine', 'ejs');
app.use(bodyParser.json());

const PORT = 5000;

app.use('/', api);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));