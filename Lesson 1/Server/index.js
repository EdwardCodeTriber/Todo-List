const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const TodoModel = require('./Models/Todo')
// const port = 5000;

const app =express();
app.use(cors());
app.use(express.json());
//Mongo connection to a database/ create one if not available
mongoose.connect("mongodb://127.0.0.1:27017/test")
// POST Route
app.post("/add", (req, res) =>{
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.get("/get", (req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.listen(3001, ()=> {
    console.log("Server is running at http://localhost:3001/")
});