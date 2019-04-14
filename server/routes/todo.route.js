const express = require('express');
const asyncHandler = require('express-async-handler');
const todoCtrl = require('../controllers/todo.controller');

const router = express.Router();

router.post('/save', asyncHandler(insert));
router.get('/all', asyncHandler(getAllTodos));

async function insert(req, res, next) {
  console.log('todo from api', req.body);
  let todo = await todoCtrl.insert(req.body);
  res.json(todo);
}

async function getAllTodos(req, res, next) {
  const todos = await todoCtrl.getAllTodos();
  res.json(todos);
}

module.exports = router;
