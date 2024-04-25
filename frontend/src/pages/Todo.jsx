
import { useState,useEffect  } from 'react'
import Control from '../components/todo.control'
import List from '../components/todo.list'
require('../styles/todo.css')
const Todo = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const ID = localStorage.getItem("token");
            const response = await fetch('http://localhost:8000/todo/user/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':ID
                    
                },
                method: "GET"
            });
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            
            const responseJSON = await response.json();
            console.log(responseJSON);
            setData(responseJSON.todos);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


  
  

    return ( 
        <div className='Todo'>
            <Control/>
            <div className="todoLists">
            {data.map(list => (
                <List key={list._id} list={list} />
            ))}
            </div>
        </div>
     );
}
 
export default Todo;