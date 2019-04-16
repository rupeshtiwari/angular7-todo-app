const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});
module.exports = mongoose.model('Todo', TodoSchema);
