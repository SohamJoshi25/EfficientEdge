
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import { useState , useEffect } from "react";
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
import Loading from "./pages/Loading";

function App() {
  //sfc

  const [isServerOn,setIsServerOn] = useState(false);

  useEffect(() => {
    let serverTimeout;
  
    const serverStatus = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth`);
        if (response.ok) {
          setIsServerOn(true);
          clearInterval(serverTimeout); // Clear interval once the server is online
        } else {
          setIsServerOn(false);
        }
      } catch (error) {
        console.error("Error checking server status:", error);
        setIsServerOn(false); // Explicitly set to false if there's an error
      }
    };
    
    if(!isServerOn){
      serverTimeout = setInterval(() => {
      serverStatus();
    }, 3000);
    }
    
  
    return () => {
      clearInterval(serverTimeout); // Cleanup interval on component unmount
    };
  }, []);


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
        {isServerOn && <NavBar/>}
        {!isServerOn && <Loading/>}

          <Routes>
         
           {<Route exact path="/" element= {isServerOn && (valid ? <div className="home"> <Home/> </div> : <div className="login"><Login/></div> )} />}
           {<Route path="/to-do" element={valid && isServerOn &&  <div className="todo"> <Todo/> </div> } />  }
           {<Route path="/home" element={valid && isServerOn &&  <div className="home"> <Home/> </div> } />}
           {<Route path="/clock" element={valid && isServerOn && <div className="clock"><Clock/></div>} /> }
           {<Route path="/planner" element={valid && isServerOn &&  <div className="planner"> <Planner/> </div> } />}
           {<Route path="/files" element={valid && isServerOn &&  <div className="files"> <Files/> </div> } />}
           {<Route path="/about-us" element={valid && isServerOn && <div className="about-us"><AboutUs/></div>} /> }
           <Route path="/setting" element={valid && isServerOn &&<div className="setting"><Setting/></div>} />
           
           {<Route path="/signup" element={!valid && isServerOn && <div className="signup"><Signin setValid={setValid}/></div>} /> }
           {<Route path="/login" element={!valid && <div className="login"><Login setValid={setValid}/></div>} /> }
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
