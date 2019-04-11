const express = require('express');
const asyncHandler = require('express-async-handler');
const todoCtrl = require('../controllers/todo.controller');

const router = express.Router();

router.post('/save', asyncHandler(insert));

async function insert(req, res, next) {
  console.log('todo from api', req.body);
  let todo = await todoCtrl.insert(req.body);
  todo = todo.toObject();
  res.json({ todo: todo });
}

module.exports = router;
