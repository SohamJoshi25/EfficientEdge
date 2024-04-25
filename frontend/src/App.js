import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import { useState } from "react";
import NavBar from './components/NavBar';
import Todo from './pages/Todo';
import Home from "./components/Home";
import Clock from "./Clock/Clock";
import Planner from "./components/Planner";
import AboutUs from "./pages/Aboutus";
import Files from "./components/Files";
import Signin from "./pages/Signup";
import Login from "./pages/Login";
import Setting from "./pages/setting";
import { useEffect } from "react";

function App() {
  //sfc




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
    <div className="App">

      
        <BrowserRouter>
        <NavBar/>
          <Routes>
          {valid &&  <Route exact path="/" element={ <div className="home"> <Home/> </div> } />}
          {!valid && <Route exact path="/" element={<div className="login"><Login/></div>} /> }
           {valid && <Route path="/to-do" element={ <div className="todo"> <Todo/> </div> } />  }
           {valid &&  <Route path="/home" element={ <div className="home"> <Home/> </div> } />}
           {valid &&  <Route path="/clock" element={<div className="clock"><Clock/></div>} /> }
           {valid && <Route path="/planner" element={ <div className="planner"> <Planner/> </div> } />}
           {valid &&  <Route path="/files" element={ <div className="files"> <Files/> </div> } />}
           {valid &&  <Route path="/about-us" element={<div className="about-us"><AboutUs/></div>} /> }
           {valid &&  <Route path="/setting" element={<div className="setting"><Setting/></div>} /> }
           
           {!valid && <Route path="/signup" element={<div className="signup"><Signin/></div>} /> }
           {!valid && <Route path="/login" element={<div className="login"><Login/></div>} /> }
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
