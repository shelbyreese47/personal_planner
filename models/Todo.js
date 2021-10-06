const mongoose = require('../db/connection');

const todoSchema = new mongoose.Schema(

    {
       date: String,
       dueDate: String,
       user: String,
       content: String,
       priority: String,
       completed: Boolean,
       

    }

);

module.exports = mongoose.model('Todo', todoSchema);