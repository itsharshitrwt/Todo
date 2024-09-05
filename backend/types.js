import { z } from "zod";
//const zod = require("zod");
//replace z with zod :)

const createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: z.string(),
    
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
} 