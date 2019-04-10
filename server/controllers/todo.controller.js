const Todo = require('../models/todo');

module.exports = {
  insert
};

async function insert(todo) {
  return await new Todo(todo).save();
}
