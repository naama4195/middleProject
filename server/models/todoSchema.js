const mongoose = require('mongoose')
const todosSchema = new mongoose.Schema
    (
{
    title:{
        type: String,
        required:true
    },
    tags:{
        type:String,
        required:false
    },
    complated:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true
}
)

module.exports=mongoose.model('Todo',todosSchema)