import { useState } from "react";
import Task from "./todo.task";
import { useNavigate } from "react-router-dom";

const List = (props) => {

    const [List, setList] = useState(props.list);
    const navigate = useNavigate();
    console.log(props.task);

    const addTask = async () => {
        const title = window.prompt("Enter Title");
        const proxy = "http://localhost:8000/task/";
        try {
            const response = await fetch(proxy, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    todoID:List._id,
                    title:title,
                    checked:false
                })
                
            });
            if (!response.ok) {
                throw new Error('Network response was not ok'); 
            }
            navigate(0);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const deleteTodo = async ()=>{
        const proxy = "http://localhost:8000/todo/"+List._id;
        try {
            const TOKEN = localStorage.getItem('token');
            const response = await fetch(proxy, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': TOKEN
                },
                method: "DELETE",                
            });
            if (!response.ok) {
                window.alert("Error!"+response.status);
                 throw new Error('Network response was not ok'); 
            }
            navigate(0);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    let classsname = "circle";
    if(List.style==="number"){
        classsname = "decimal";
    }
    return ( 
        <div id={List._id} className="todoList"> 
            <h2>{List.title}</h2> {/* Display the title property */}
            <div className="listControl">
                <button onClick={addTask}>Add</button> <button onClick={deleteTodo}>Delete</button>
            </div>
            <ul className={classsname}>
                {List.tasks.map(task => (
                    <Task key={task} taskID={task} />
                ))}
            </ul>    
        </div> 
    );
}
 
export default List;
