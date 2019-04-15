const express = require('express');
const asyncHandler = require('express-async-handler');
const todoCtrl = require('../controllers/todo.controller');

const router = express.Router();

router.post('/save', asyncHandler(insert));
router.get('/all', asyncHandler(getAllTodos));
router.delete('/:id', asyncHandler(deleteTodo));

async function insert(req, res, next) {
  console.log('todo from api', req.body);
  let todo = await todoCtrl.insert(req.body);
  res.json(todo);
}

async function getAllTodos(req, res, next) {
  const todos = await todoCtrl.getAllTodos();
  res.json(todos);
}

async function deleteTodo(req, res, next) {
  await todoCtrl.deleteTodo(req.params.id);
  res.json(`${req.body} deleted`);
}

function handlError(res, reason, message, code) {
  console.log(`Error: ${reason}`);
  res.status(code || 500).json({ error: message });
}

module.exports = router;
