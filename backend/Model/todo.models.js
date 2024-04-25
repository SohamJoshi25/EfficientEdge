const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    color:{
        type:String
    },
    style:{
        type: String,
        enum: {
            values: ['number', 'dot']
        },
        default:'dot'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Task"
        }
    ]
},{timestamps:true});
const Todo = mongoose.model("Todo",todoSchema);
module.exports = Todo;