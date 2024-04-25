require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();

//Route Files
const authRoutes = require('./Route/auth.routes');
const userRoutes = require('./Route/user.routes');
const todoRoutes = require('./Route/todo.routes');
const taskRoutes = require('./Route/task.routes');


const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors(


))
app.use((request, response, next)=>{
    console.log(request.path, request.method);
    next();
});

//handle request using routing
app.use('/auth',authRoutes)
app.use('/user',userRoutes)
app.use('/todo',todoRoutes)
app.use('/task',taskRoutes)
 
//Connect Mongoose to MongoDB
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log('Started and Connected to DB at port ',process.env.PORT);
    });
}).catch((e)=>{
    console.log(e);
});
