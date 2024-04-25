import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
const settingLogo = require("../assets/setting.png")
const NavBar = () => {
    
    const navigate = useNavigate()

    const logout = ()=>{
        localStorage.removeItem("token");
        navigate('/login');
        navigate(0);
        setValid(false);
    }

    const verifyJWT = async ()=>{
        try{
          console.log("faf");
          const response = await fetch("https://efficientedge.onrender.com/auth/jwt",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':localStorage.getItem("token")
            },
            method:"GET"
         })
    
          if (!response.ok) {
            console.log(response);
            localStorage.removeItem("token")
          }else{
            setValid(true);
            console.log("VALID")
          }
        }
      catch(e){
        console.log(e);
      }
      }
    
    
      const [valid, setValid] = useState(false);
      if(localStorage.getItem("token"))
      verifyJWT();

      const setting = ()=>{
        navigate('/setting');
        navigate(0);
      }

    return (
        <nav className="navbar">
            <h1> EfficientEdge </h1>
            {valid && <a href="/home" >Home</a> }
            {valid && <a href="/clock" >Clock</a> }
            {valid && <a href="/to-do" > To-Do List</a> }
           {valid &&  <a href="/planner" >Planner</a> }
           {valid &&  <a href="/files" > Files</a> }
           {valid &&  <a href="/about-us" > About Us</a> }
            {!valid && <a href="/signup">Sign Up</a>}
            {!valid && <a href="/login">Login</a> }
            {valid  && <div>
                <button className="logoutBtn" onClick={logout}> Logout </button>
            </div> }

            {valid && 
               <button className="homeSettingBtn" onClick={setting}>
                   <img src={settingLogo} alt="Setting" /> <p>Account Settings</p>
               </button>
            }
        </nav>
    );
}
 
export default NavBar;