const express=require('express')
const Router=express.Router()

const UserController=require("../controllers/userController")
Router.post("/",UserController.createNewUser)
Router.get("/",UserController.getAllUsers)
Router.put("/",UserController.updateUser)
Router.delete("/:id",UserController.deleteUser)
//Router.get("/:name",UserController.getUserByName)

module.exports=Router
