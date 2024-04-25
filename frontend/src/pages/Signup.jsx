import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css";
 

const Signup
 = (props) => {
    const navigate = useNavigate()
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirm,setConfirm] = useState("");

    const userSignUp = async (e) =>{
        e.preventDefault();
        if(name==='' || password==='' || email===''){
        window.alert("Any fields cannot be blank")
        return;
        }
        if(password!==confirm){
            setPassword('');
            setConfirm('');
            return window.alert("Passwords do not match!")
            
        }
        try{
            const response = await fetch('http://localhost:8000/auth/signup', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({ email:email, password:password, name:name})
            })
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            window.alert('User Registered Successfully');
            setEmail('');
            setPassword('');
            navigate('/login');
            navigate(0);
        }catch(e){
            console.log(e);
        }
        
    }

    return ( <div className="signup-body">
        
        <form onSubmit={userSignUp} className="signup-form">
            <h2>Sign Up Please!!!</h2>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label>Email</label>
            <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
            <label>Confirm Password</label>
            <input type="password" value={confirm}  onChange={(e)=>{setConfirm(e.target.value)}}/>
            <button className="submit" type='submit'>Submit</button>
        </form>
    </div> );
}
 
export default Signup
;