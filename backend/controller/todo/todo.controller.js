const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();
const todoModel = require('../../Model/todo.models')
const userModel = require('../../Model/user.models')
const taskModel = require('../../Model/task.models')

const defaults = async (request,response)=>{
    const Todos = await todoModel.find({});
    response.status(200).json({Todos});
}

const getID = async (request,response) =>{
    try{
        const todoID = request.params.id;
        const Todo = await todoModel.findById(todoID);
        if(!Todo){
            return response.status(404).json({ error: "Not Found" });
        }
        return response.status(200).json({Todo});
    }catch(e){
        return response.status(504).json({ error: e.message });
    }
}

const createTodo = async(request,response)=>{
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({ error: "Token Not Found" });
    }
    const {title,color,style} = request.body;
    try {
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(userID);
        if (!user) {
            return response.status(404).json({ error: "User Not found" });
        }
        const newTodo = new todoModel({title:title,color:color,style:style,createdBy:user,task:[]});
        await newTodo.save()
        return response.status(201).json({message:"Task Created"})
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
}

const getTodoUser = async(request,response)=>{
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({ error: "Token Not Found" });
    }
    try {
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        const userTodo = await todoModel.find({createdBy:userID});
        return response.status(201).json({todos:userTodo})
    } catch (error) {
        console.log(error);
        return response.status(401).json({ error: error.message });
    }
}

const deleteTodo = async (request, response) => {
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({ error: "Token Not Found" });
    }
    try {
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        const todoID = request.params.id; 
        console.log(todoID + "-ID");
        const userTodo = await todoModel.findById(todoID);
       
        if (!userTodo) {
            return response.status(404).json({ error: "Todo Not Found" });
        }
        console.log(userTodo.createdBy);
        console.log(userID);
        if (userTodo.createdBy != userID) {
            return response.status(403).json({ error: "Forbidden Request" });
        }
        await todoModel.findByIdAndDelete(todoID);
        console.log(...userTodo.tasks);
        
        // Use for...of loop to iterate over tasks
        for (const task of userTodo.tasks) {
            const del = await taskModel.findByIdAndDelete(task);
            console.log(del);
        }

        return response.status(201).json({ deletedTodo: userTodo });
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
}

const updateTodo = async (request,response)=>{
    const token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({ error: "Token Not Found" });
    }
    try {
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        const todoID = request.params.id;
        const userTodo = await todoModel.findById(todoID);
        if(!userTodo){
            return response.status(404).json({ error: "Todo Not Found" });
        }
        if(userTodo.createdBy!=userID){
            return response.status(403).json({ error: "Forbidden Request" });
        }
        const {title,color,style} = request.body;
        await todoModel.findByIdAndUpdate(todoID,{title:title,color:color,style:style});
        const updatedTodo =await todoModel.findById(todoID);
        return response.status(201).json({updatedTodo:updatedTodo})
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
}

module.exports = {defaults,createTodo,getTodoUser,getID,deleteTodo,updateTodo}