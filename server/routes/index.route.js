const express = require('express');
const todoRoutes = require('./todo.route');

const router = express.Router();

router.use('/todos', todoRoutes);

module.exports = router;
