import { useState,useEffect  } from 'react'
import Delete from '../assets/Delete.svg'
import { useNavigate } from 'react-router-dom';
const Task = (props) => {
    const navigate = useNavigate();
    const ID = props.taskID;
    const [data,setData] = useState({});
    let classsname = "todoTask ";
    if(data.checked){
        classsname = "todoTask checked";
    }

    useEffect(() => {
        const fetchData = async () => {
            const proxy = process.env.REACT_APP_BASE_URL+"/task/"+ID;
            try {
                const response = await fetch(proxy, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET"
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok'); 
                }
                const responseJSON = await response.json();
                console.log(responseJSON);
                setData(responseJSON.task);
              
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const deleteTask = async (e)=>{
        e.stopPropagation();
        const proxy = process.env.REACT_APP_BASE_URL+"/task/"+ID;
        try {
            const response = await fetch(proxy, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                
            });
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            navigate(0);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const toggleCheck = async (e)=>{

        e.stopPropagation();
        
        e.target.classList.toggle('checked')

        const checkBool = e.target.classList.contains('checked');

        const check = {checked:false}
       

        if(checkBool){
            check.checked=true;
        }

        const proxy ="http://localhost/"+"/task/"+ID;
        try {
            const response = await fetch(proxy, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify(check)
                
            });
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    return ( 
        <div className="taskHolder">
        <li onClick={toggleCheck} className={classsname}>
             {data.title} 
        </li>
        <img onClick={deleteTask} src={Delete} alt="" />
        </div>
     );
}
 
export default Task;