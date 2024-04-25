
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css";
 


const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const userLogin = async (e) =>{
        e.preventDefault();
        if(password==='' || email===''){
            window.alert("Any fields cannot be blank")
            return;
        }
        console.log(email,password)
        try{
            const response = await fetch('http://localhost:8000/auth/login', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({ email:email, password:password})
            })
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const token = response.headers.get('Authorization');
            localStorage.setItem('token',token);
            window.alert('Login successful');
            setEmail('');
            setPassword('');
            navigate('/home');
        }
        catch(e){
            console.log(e);
            setEmail('');
            setPassword('');
        }
        
    }

    return ( <div className="signup-body">
        
        <form onSubmit={userLogin} className="signup-form">
            <h2>Login</h2>
            <label>Email</label>
            <input type="email" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type="password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
    
            <button className="submit" type='submit'>Submit</button>
        </form>
    </div> );
}
 
export default Login;