const express = require("express")
const {createTodo, updateTodo} = require("./types");
const {todo} =  require("./db")
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todo", async function(req ,res){
    const createPayload = req.body;
    const parsePayload = createTodo;
    if(!parsePayload){
        res.status(411).json({
            msg: "wrong inputs entered",
        })
        return;
    }
    //else put this in mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: true
    })

    res.json({
        msg: "A Todo created"
    })

})

app.get("/todos", async function(req ,res){
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.put("/completed", async function(req ,res){
    const completed = req.body;
    const checkCompleted = updateTodo.safeparse(completed);
    if(!checkCompleted){
        res.status(411).json({
            msg:"wrong inputs entered",
        })
        return;
    }

    await todo.update({
        _id: req.body.id
    },{
         completed: true
    })

    res.json({
        msg:"Marked as completed"
    })
})

const PORT = 3000;
app.listen(3000);
console.log(`server running on ${PORT}`);
