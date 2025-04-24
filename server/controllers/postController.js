const Post = require("../models/postSchema");

//Create- Post
const createNewPost = async (req, res) => {
    const {title,body} = req.body
    if (!title ) { // Confirm data
    return res.status(400).json({ message: 'title is required' })}
    // Create and store the new task
    const post = await Post.create({ title, body})
    if (post) { // Created
    return res.status(201).json({ message: 'New post created' })
    } else {
    return res.status(400).json({ message: 'Invalid post ' })}}

//Read- Get
const getAllPosts = async (req, res) => {
    // Get all tasks from MongoDB
    const posts = await Post.find().lean()
    // If no tasks
    if (!posts?.length) {
    return res.status(400).json({ message: 'No posts found' })
    }
    res.json(posts)
    }

//Update- Put
const updatePost = async (req, res) => {
    const {_id,title,body}= req.body
    // Confirm data
    if (!_id || !title ) {
    return res.status(400).json({message:"fields are required"})
    }
    // Confirm task exists to update
    const post = await Post.findById(_id).exec()
    if (!post) {
    return res.status(400).json({ message: 'Post not found' })
    }
    post.title = title
    post.body = body
    const updatedPost = await post.save()
    res.json(`'${updatedPost.title}' updated`)
    }


//Delete
const deletePost = async (req, res) => {
    const { id } = req.params
    // Confirm task exists to delete
    const post = await Post.findById(id).exec()
    if (!post) {
    return res.status(400).json({ message: 'Post not found' })
    }
    const result = await post.deleteOne()
    const reply=`Post '${result.title}' ID ${result._id} deleted`
    res.json(reply)
    }


//getPostById
const getPostById = async (req, res) => {
    const {_id} = req.params
    // Get single task from MongoDB
    const post = await Post.findById(_id).lean()
    // If no tasks
    if (!post) {
    return res.status(400).json({ message: 'No post found' })
    }
    res.json(post)
    }




    module.exports={getPostById,deletePost,updatePost,getAllPosts,createNewPost}