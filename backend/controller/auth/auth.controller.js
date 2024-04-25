const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors') 
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();
const userModel = require('../../Model/user.models')


function defaults(req,res){
    res.send("Auth from controller")
}

const jwtValaditer = async (request,response)=>{
    const token = request.headers.authorization;
    if (!token) { 
        return response.status(401).json({ error: "Token Not Found" });
    }
    try{

        const { userID } = jwt.verify(token, process.env.SECRET_KEY);

        response.status(200).json({message:"JWT Verified"})

    }catch(e){
        response.status(400).json({error:e})
    }
}



const signUp = async (request,response) => {
    try{
        const {email,name,password} = request.body;
       
        const user = await userModel.findOne({ email: email});
        if(user){
            return response.status(401).json({error:"User Already Exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new userModel({name:name,password:hashedPassword,email:email});
        await newUser.save();
        console.log(newUser);
        return response.status(201).json({message:"User Created Successsfully"})
    } catch(e){
        console.log(e.message);
        return response.status(400).json({error:e});
    }
}

const login = async (request,response) =>{
    try{
        const {email,password} = request.body;
        console.log(request.body)
        const User = await userModel.findOne({ email: email});
        if(!User){
            return response.status(404).json({error:"User Not Found"});
        }
        const validatePassword = await bcrypt.compare(password,User.password);
        if(!validatePassword){
            return response.status(401).json({error : "Invalid Password"});
        }
        const token = jwt.sign({userID:User._id},process.env.SECRET_KEY,{expiresIn: '3hr'});
        
        response.setHeader('Authorization', `${token}`);
        response.setHeader("Access-Control-Expose-Headers", "Authorization");
        console.log("User logged in " , token)
        return response.status(200).json({message:"Login Successful"});

    }catch(e){
        console.log(e.message)
        return response.status(400).json({error:e.message});
    } 
}


const changePassword = async (request, response) => {
    const token = request.headers.authorization;
    const {oldpassword, newpassword } = request.body;
    if (!token) {
        return response.status(401).json({ error: "Token Not Found" });
    }

    try {
        const { userID } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findById(userID);
        if (!user) {
            return response.status(404).json({ error: "User Not found" });
        }
        const validatePassword = await bcrypt.compare(oldpassword, user.password); // Await the result of bcrypt.compare
        if (!validatePassword) {
            return response.status(403).json({ error: "Invalid Password" });
        }
        const hashedPassword = await bcrypt.hash(newpassword, 10);
        user.password = hashedPassword;
        await user.save(); // Await the save operation
        return response.status(200).json({ message: "Password Updated" ,user}); // Change status code to 200 for successful response
    } catch (error) {
        return response.status(401).json({ error: error.message });
    }
}

module.exports = {defaults,signUp,login,changePassword,jwtValaditer}