const userModel = require('../../Model/user.models')
const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();



const defaults = async (req,res)=>{
    const Users = await userModel.find({});
    res.status(200).json({Users});
}

const getOne = async(request,response)=>{
    const ID = request.params.id;
    try{
        const User = await userModel.findById(ID);
        if(!User){
            return response.status(404).json({error:"User Not Found"});
        }
        return response.status(200).json({User});
    }catch(error){
        return response.status(400).json({error:error.message});
    }
    
}

const deleteOne = async (request,response)=>{
    const token = request.headers.authorization;
    if(!token){
       return response.status(403).json({message:"Token Not Found"});
    }
    try{
        const {userID} = jwt.verify(token,process.env.SECRET_KEY);
        await userModel.findByIdAndDelete(userID);
        return response.status(200).json({message:"User Deleted"});
    }catch(e){
       return response.status(400).json({error:e.message});
    }
}

const changeName = async (request,response) =>{
    const token = request.headers.authorization;
    if(!token){
        return response.status(403).json({message:"Token Not Found"});
    }
    try{
        const {userID} = jwt.verify(token,process.env.SECRET_KEY);
        const {name} = request.body;
        await userModel.findByIdAndUpdate(userID,{name:name});
        return response.status(200).json({message:"Name changed",name});
    }catch(e){
        return response.status(400).json({error:e.message});
    }   
}

module.exports = {defaults,getOne,deleteOne,changeName};