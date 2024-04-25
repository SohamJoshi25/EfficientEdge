
import { useNavigate } from 'react-router-dom';
const Control = () => {
    const navigate = useNavigate();
    const addTodo = async ()=>{
        const Title = window.prompt("Enter Title");
        let style = window.prompt("Enter Style: dot/number");
        while(style!="dot" && style!="number"){
            console.log(window.alert("Please Enter Approprate Values"));
            style = window.prompt("Enter Style: dot/number");
        } 
        const color = "FFF";
        try {
            const ID = localStorage.getItem("token");
            const response = await fetch('https://efficientedge.onrender.com/todo/', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization':ID
                    
                },
                method: "POST",
                body: JSON.stringify({
                    style:style,
                    title:Title,
                    color:color
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

    return (  
    <div className="control">

        <button onClick={addTodo}>
            ADD TODO
        </button>

    </div> 
);
}
 
export default Control;