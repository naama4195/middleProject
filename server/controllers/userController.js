const User = require("../models/userSchema");

//Create- Post
const createNewUser = async (req, res) => {
    const {name,userName,email,address,phone} = req.body
    if (!name ) { // Confirm data
    return res.status(400).json({ message: 'name is required' })}
    // Create and store the new task
    const user = await User.create({ name, userName, email,
        address, phone})
    if (user) { // Created
    return res.status(201).json({ message: 'New user created' })
    } else {
    return res.status(400).json({ message: 'Invalid user ' })}}

//Read- Get
const getAllUsers = async (req, res) => {
    // Get all tasks from MongoDB
    const users = await User.find().lean()
    // If no tasks
    if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
    }

//Update- Put
const updateUser = async (req, res) => {
    const {_id,name,userName, email, address, phone}= req.body
    if (!_id ||!name||!userName) {
    return res.status(400).json({message:"fields are required"})
    }
    
    const user = await User.findById(_id).exec()
    if (!user) {
    return res.status(400).json({ message: 'Task not found' })
    }
    user.name = name
    user.userName = userName
    user.email = email
    user.address = address
    user.phone = phone
    const updatedUser = await user.save()
    res.json(`'${updatedUser.name}' updated`)
    }


//Delete
const deleteUser = async (req, res) => {
    const { id } = req.params
    
    const user = await User.findById(id).exec()
    if (!user) {
    return res.status(400).json({ message: 'User not found' })
    }
    const result = await user.deleteOne()
    const reply=`User '${result.name}' ID ${result._id} deleted`
    res.json(reply)
    }


//getUserByName
// const getUserByName = async (req, res) => {
//     const {name} = req.params

//     const user = await User.find({name:name}).lean()
    
//     if (!user) {
//     return res.status(400).json({ message: 'No user found' })
//     }
//     res.json(user)
//     }

    


    module.exports={deleteUser,updateUser,getAllUsers,createNewUser}