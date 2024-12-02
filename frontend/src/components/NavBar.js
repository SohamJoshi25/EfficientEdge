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
          const response = await fetch(process.env.REACT_APP_BASE_URL+"/auth/jwt",{
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


    return (
        <nav className="navbar">
            <h1> EfficientEdge </h1>
            {valid && <Link to="/home" >Home</Link> }
            {valid && <Link to="/clock" >Clock</Link> }
            {valid && <Link to="/to-do" > To-Do List</Link> }
           {valid &&  <Link to="/planner" >Planner</Link> }
           {valid &&  <Link to="/files" > Files</Link> }
           {valid &&  <Link to="/about-us" > About Us</Link> }
           
            {!valid && <Link to="/signup">Sign Up</Link>}
            {!valid && <Link to="/login">Login</Link> }

            {valid  && 
            <Link to="/login" >
              <div onClick={()=>{
              localStorage.removeItem("token");
            }}>
                <button className="logoutBtn"> Logout </button>
            </div> 
            </Link>}

            {valid && <Link to="/setting">
                <button className="homeSettingBtn" >
                    <img src={settingLogo} alt="Setting" /> <p>Account Settings</p>
                </button>
               </Link>
            }
        </nav>
    );
}
 
export default NavBar;