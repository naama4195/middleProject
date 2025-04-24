const mongoose = require('mongoose')
const userSchema = new mongoose.Schema
    (
{
    name:{
        type: String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    }
},{
    timestamps: true
}
)

module.exports=mongoose.model('User',userSchema)