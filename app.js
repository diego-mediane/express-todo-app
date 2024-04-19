const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('short'));

// Todo routes here
// TODO: Add routes for TODO items creation, update, delete, and list operations


module.exports = app;