import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import "../styles/setting.css";

const Setting = () => {
  
    const [current,setCurrent] = useState('');
    const [newpass,setNewpass] = useState('');
    const [confirm,setConfirm] = useState('');
    const token =  localStorage.getItem('token');
    const  navigate = useNavigate();
  
    const handleSubmit = async (event)=>{
      event.preventDefault();
      if(current===''||newpass===''||confirm===''){
        window.alert("Any fields cannot be blank")
      }
      
      if(confirm!==newpass){
        window.alert('Confirm Password do not match!');
        setNewpass('');
        setConfirm('');
        return;
      }
        try {
            const ID = localStorage.getItem("token");
            const response = await fetch('https://efficientedge.onrender.com/auth/changepassword', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':ID
                    
                },
                method: "POST",
                body: JSON.stringify({ oldpassword:current, newpassword:newpass})
            });
            if (!response.ok) {
               window.alert("Error!"+response.status);
                throw new Error('Network response was not ok'); 
                
            }
            window.alert("Password Changed Successfully")

            
            const responseJSON = await response.json();
            console.log(responseJSON);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
  
    const [deletepass,setDeletepass]= useState('');
  
    const handleDelete = (event)=>{
      event.preventDefault();
      if(deletepass===''){
        window.alert("Any fields cannot be blank")
      }
      if(!window.confirm('This will delete your account permanantly!!!')){
        setDeletepass('');
        return;
      }
     //api
  
    }
  
  
    return (
      <div className='account-body'>
        <form onSubmit={handleSubmit}>
          <h1>Change Password</h1>
          <label >Current Password</label>
          <input type="password" placeholder='Current Password' value={current} onChange={(e)=>{setCurrent(e.target.value)}}/>
          <br />
  
          <label >New Password</label>
          <input type="password"  placeholder='New Passowrd' value={newpass} onChange={(e)=>{setNewpass(e.target.value)}}/>
          <br />
  
          <label >Confirm Password</label>
          <input type="password"  placeholder='Confirm Password' value={confirm} onChange={(e)=>{setConfirm(e.target.value)}}/>
          <br />
          <button type="submit">Change Password</button>
        </form>
  
        {/* <form className='delete' onSubmit={handleDelete}>
          <h1>Delete Account</h1>
  
          <label >Confirm Password</label>
          <input type="password"  placeholder='Confirm Password' value={deletepass} onChange={(e)=>{setDeletepass(e.target.value)}}/>
          <br />
          <button type="submit">Delete</button>
        </form> */}
      </div>
    )
}
 
export default Setting;