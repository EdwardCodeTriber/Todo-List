const mongoose =  require('mongoose')
const TodoSchema = new mongoose.Schema({
    task: String
})

// Creating a database collection
const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel;