import express from "express";
const {createTodo, updateTodo} = require("./types");
const app = express();

app.use(json());


//body{
  //title:
  //description:
//}
app.post("/todo", function(req ,res){
    const createPayload = req.body;
    const parsePayload = createTodo;
    if(!parsePayload){
        res.status(411).json({
            msg: "wrong details entered",
        })
        return;
    }
    //else put this in mongodb
})

app.get("/todos", function(req ,res){
    
})

app.put("/completed", function(req ,res){
    const completed = req.body;
    const checkCompleted = updateTodo.safeparse(completed);
    if(!checkCompleted){
        res.status(411).json({
            msg:"wrong inputs entered",
        })
        return;
    }
})