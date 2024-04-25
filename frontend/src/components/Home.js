import '../styles/home.css'
import HomeCard from './HomeCard'
import clockLogo from '../assets/clock.jpg'
import todoLogo from '../assets/to-do-list.png'
import settingLogo from '../assets/setting.png'
import calenderLogo from '../assets/calender.webp';
import filesLogo from '../assets/files.png';
import aboutusLogo from '../assets/aboutus.jpg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const Text = {
        clock:"Boost productivity with our Pomodoro Timer. Effortlessly manage tasks, stay focused, and enhance efficiency. Say goodbye to procrastination and hello to a more organized and productive work routine. Try it now!",
        todo:"Organize your life effortlessly with our Todo List. Stay on top of tasks, prioritize effectively, and achieve more with less stress. Streamline your day and maximize productivity. Get started today!",
        files:"Experience seamless file management with our Storage Solution. Effortlessly store, organize, and access your files from anywhere. Say goodbye to clutter and hello to hassle-free document management. Simplify your digital life now!",
        planner:"Maximize your time with our Calendar Planner. Effortlessly schedule events, set reminders, and stay organized. Streamline your days, prioritize tasks, and achieve your goals with ease. Start planning smarter today!",
        aboutus:"Welcome to our world! We're a passionate team dedicated to crafting innovative solutions that simplify your life. Learn more about our journey, values, and commitment to excellence. Join us in revolutionizing productivity!"
    };
    const navigate = useNavigate();


    const setting = ()=>{
       
        navigate('/setting');
    }

    return ( 
        <div className="home">
            
            <div className="cards">

                <HomeCard title={"Clock"} imgURL={clockLogo} body={Text.clock} link={'/clock'}/>
                <HomeCard title={"ToDo_List"} imgURL={todoLogo} body={Text.todo} link={'/to-do'}/>
                <HomeCard title={"Planner"} imgURL={calenderLogo} body={Text.planner} link={'/planner'}/>
                <HomeCard title={"Files"} imgURL={filesLogo} body={Text.files} link={'/files'}/>
                <HomeCard title={"AboutUs"} imgURL={aboutusLogo} body={Text.aboutus} link={'/about-us'}/>
                
            </div>


           
        </div>
     );
}
 
export default Home;