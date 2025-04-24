const Todo = require("../models/todoSchema");


const createNewTodo = async (req, res) => {
    const {title,tags,complated} = req.body
    if (!title ) { 
    return res.status(400).json({ message: 'title is required' })}
    
    const todo = await Todo.create({ title, tags, complated})
    if (todo) { 
    return res.status(201).json({ message: 'New todo created' })
    } else {
    return res.status(400).json({ message: 'Invalid todo ' })}}

//Read- Get
const getAllTodo = async (req, res) => {
    
    const todos = await Todo.find().lean()
    
    if (!todos?.length) {
    return res.status(400).json({ message: 'No todos found' })
    }
    res.json(todos)
    }

//Update- Put
const updateTodo = async (req, res) => {
    const {_id,title,tags, complated}= req.body
    console.log(_id,title,tags, complated);
    if (!_id || !title ) {
    return res.status(400).json({message:"fields are required"})
    }
    
    const todo = await Todo.findById(_id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    todo.title = title
    todo.tags = tags
    todo.complated = complated
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated`)
    }


//Delete
const deleteTodoById = async (req, res) => {
    const { id } = req.params
    
    const todo = await Todo.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    const result = await todo.deleteOne()
    const reply=`Todo '${result.title}' ID ${result._id} deleted`
    res.json(reply)
    }


//getTodoByTitle
// const getTodoByTitle = async (req, res) => {
//     const {title} = req.params
    
//     const todo = await Todo.find({title:title}).lean()
    
//     if (!todo) {
//     return res.status(400).json({ message: 'No todo found' })
//     }
//     res.json(todo)
//     }


//Updatecomplete
/*const updateTodoComplete = async (req, res) => {
    const { title } = req.params
    
    const todo = await Todo.find({title:title}).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    if(todo.complated==true)
        todo.complated=false
    else (todo.complated=true)
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated`)
    }
*/
module.exports={deleteTodoById,updateTodo,getAllTodo,createNewTodo}
  