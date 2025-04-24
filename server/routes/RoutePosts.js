const express=require('express')
const Router=express.Router()

const postController = require("../controllers/postController")

Router.post("/",postController.createNewPost)
Router.get("/",postController.getAllPosts)
Router.put("/",postController.updatePost)
Router.delete("/:id",postController.deletePost)
Router.get("/:id",postController.getPostById)


module.exports=Router