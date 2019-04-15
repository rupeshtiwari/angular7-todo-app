const Todo = require('../models/todo');

module.exports = {
  insert,
  getAllTodos,
  deleteTodo
};

async function insert(todo) {
  return await new Todo(todo).save();
}

async function getAllTodos() {
  return await Todo.find({});
}

async function deleteTodo(id) {
  return await Todo.deleteOne({ _id: id });
}
