require('dotenv').config();
const mongoose = require("mongoose");
//const { boolean } = require("zod");

mongoose.connect(process.env.DB_URL)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:{ type: Boolean, default:false}
})


//this is the model, exporting our model
const todo = mongoose.model('todos', todoSchema);
module.exports= {
    todo
}