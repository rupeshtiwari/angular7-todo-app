const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes/index.route');

const app = express();

// logger only in dev env
if (config.env === 'development') {
  app.use(logger('dev'));
}
const distDir = path.join(__dirname, '../../dist');

// dist folder hosting

app.use(express.static(distDir));

// index html serving
app.get(/^((?!(api)).)*/, (req, res) =>
  res.sendFile(path.join(distDir, 'index.html'))
);

// api body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// API router
app.use('/api/', routes);

module.exports = app;
