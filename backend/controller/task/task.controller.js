const taskModel = require('../../Model/task.models');
const todoModel = require('../../Model/todo.models');
const userModel = require('../../Model/user.models');
const jwt = require('jsonwebtoken')

const defaults = async (request,response)=>{
    const Tasks = await taskModel.find({});
    response.status(200).json({Tasks});
}

const addTask = async (request,response)=>{
    const {todoID,title,checked} = request.body;
    try{
        const userTodo = await todoModel.findById(todoID);
        if(!userTodo){
            return response.status(404).json({ error: "Todo Not Found" });
        }
        const userTask = await taskModel.create({title:title,checked:checked,todo:userTodo})
        userTodo.tasks.push(userTask);
        await userTodo.save();
        return response.status(200).json({Tasks : userTask})
    }catch(error){
        return response.status(400).json({ error: error.message });
    }
}


const getID = async (request,response) =>{
    const taskID = request.params.id;
    try{
        const userTask = await taskModel.findById(taskID);
        if(!userTask){
            return response.status(402).json({error:"Task doesn't exist"});
        }
        return response.status(200).json({task:userTask})
    }catch(error){
        return response.status(400).json({error:error.message});
    }
}


const getTodoTasks = async (request, response) => {
    const todoID = request.params.id;
    try {
        const Todo = await todoModel.findById(todoID);


        const tasksPromises = Todo.tasks.map(async (task) => {
            return await taskModel.findById(task);
        });

        // Resolve all promises
        const tasksArrays = await Promise.all(tasksPromises);


        return response.status(200).json({ Tasks: tasksArrays });
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
}



const updateTask = async (request,response) =>{
    const taskID = request.params.id;
    try {
        const {title,checked} = request.body
        console.log(request.body);
        const Task = await taskModel.findByIdAndUpdate(taskID,{title:title,checked:checked});
        if(!Task){
            return response.status(404).json({error:"Task Does not exist"});
        }
        return response.status(200).json({task:Task});
    }catch(error){
        return response.status(400).json({error:error.message});
    }
}


const deleteTask = async (request,response) =>{
    const taskID = request.params.id;
    try {
        const Task = await taskModel.findByIdAndDelete(taskID);
        if(!Task){
            return response.status(404).json({error:"Task Does not exist"});
        }
        const Todo = await todoModel.findById(Task.todo);
        const index = Todo.tasks.indexOf(taskID);
        if (index > -1) { // only splice array when item is found
            Todo.tasks.splice(index, 1); // 2nd parameter means remove one item only
        }
        await Todo.save();

        return response.status(200).json({task:Task});
        
    }catch(error){
        return response.status(400).json({error:error.message});
    }
}

module.exports = {defaults,addTask,getID,getTodoTasks,updateTask,deleteTask}