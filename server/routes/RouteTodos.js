const express=require('express')
const Router=express.Router()

const todoController=require("../controllers/todoController")

Router.post("/",todoController.createNewTodo)
Router.get("/",todoController.getAllTodo)
Router.put("/",todoController.updateTodo)
//Router.delete("/",todoController.deleteTodo)
Router.delete("/:id",todoController.deleteTodoById)
//Router.get("/:title",todoController.getTodoByTitle)

module.exports=Router