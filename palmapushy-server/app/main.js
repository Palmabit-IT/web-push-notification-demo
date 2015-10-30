var express = require('express'),
  bodyParser = require('body-parser'),
  users = require('./routes/users'),
  cors = require('cors'),
  app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', users);

module.exports = app;
