const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    checked:{
        type:Boolean,
        default:false
    },
    todo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo",
        required:true
    }
},{timestamps:true});
const Task = mongoose.model('Task',taskSchema);
module.exports = Task;

 