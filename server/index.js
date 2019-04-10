const express = require('express');
const path = require('path');
const config = require('./config');
const app = express();

const distDir = path.join(__dirname, '../dist');

app.use(express.static(distDir));

app.get('/*', (req, res) => res.sendFile(path.join(distDir, 'index.html')));

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`);
});
