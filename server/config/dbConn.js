const mongoose = require('mongoose')

 const connectDB = async () => {
 try {
 await mongoose.connect(process.env.DATABASE_URL)
 } catch (err) {
 console.error("*****error connection to DB****\n" + err)
 }
 }
 module.exports = connectDB