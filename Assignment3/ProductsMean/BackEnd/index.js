const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var product = require('./controller/ProductController');

app.use(bodyParser.json());
app.use(cors());
app.use('/',product);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))