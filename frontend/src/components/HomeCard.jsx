
import {Link} from 'react-router-dom'
const HomeCard = (props) => {
    const title = props.title;
    const body = props.body;
    const imgURL = props.imgURL;
    const link = props.link;


    const onClick = (()=>{
            })
    return ( 
        <Link to={link}  style={{ textDecoration: 'none' }}>
            <div className="card">
                <p>{title}</p>
                <img className={title}  src={imgURL} alt="Clock"></img>
                <h2>{body}</h2>
            </div>
        </Link>

     );
}

export default HomeCard;