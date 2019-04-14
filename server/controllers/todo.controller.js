const Todo = require('../models/todo');

module.exports = {
  insert,
  getAllTodos
};

async function insert(todo) {
  return await new Todo(todo).save();
}

async function getAllTodos() {
  return await Todo.find({});
}
