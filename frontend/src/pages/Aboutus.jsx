import "../styles/aboutus.css"
const SohamPFP = require('../assets/pfp/Soham.jpeg')
const ShreyaPFP = require('../assets/pfp/shreya.jpg')
const DevayaniPFP = require('../assets/pfp/devayani.png')
const AboutUs = () => {
    const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAZlBMVEUAAAD////8/PwFBQX5+fnx8fHKyso4ODicnJyXl5fi4uLW1tZISEijo6McHBx1dXVDQ0O4uLitra3r6+t7e3tra2tmZmYyMjIYGBiEhISQkJCKioooKCgNDQ0hISFTU1NeXl7BwcEkotp5AAAE30lEQVR4nO2baXeqMBCGs4HKIgYQFUHl///Jm0hdahWzMeGew/Olx26+nQ6zZYLQzMzMzMzMzMzMzMzMzIwnKKUfX02U/SI5J7u9bxlDSCvuN5dlGOAbQbi8bCYpWojdZbzArxS83PV/yqQ4pVGACXkRKz7BonTtW9wzwnKLnP0x6wOWLyZk3/2hwOSzXEZwcZiG/4oglXTyX/7qBM/uIL7WbdAk4lkVfNT5bOCg8i1UOOO6FsZTUYtxvfbuvClT0Xp1CJZ61oqWZODxerEuYUvPYpW84G5d7FVuyZT9oPcFVnpSKkNXoWVaSZH4CWTiPSNdrYLIV1ZbaVtWuu7Ki1Z0/ltxqRCcfYhtuYEfSOvyFlwrRVutcPCAsa0Hz+VYNS28qMUcXCtaGEntWYCrTS3Uwmc0k1h7I4IWezZ8xiSEwQYxitKBXuGrWpyCRgWKQmOtkhA2hi1ig6z7sG0MGxUuZln3RnEBVZuZZYYbLANVe7ASi/EBVG1tqbYGVbu0VAubzVaWamFL8lnteBwt1R5B1ZYWFZiAwI4VtkpzxY8EW1C1SWRRJ4gCNwFV24ZWVU0I2vZS0UPa2JYDd72ZRTXOgIsahNaBhScE4EdS3Fgs9jBQOFuohZ+EtbHhrEb0OeCDMCqSr6naI/gcjKLGtO0NGx/z5tJwaufp6MHMuKEXrRS1WHu8RBhuvZw7UIoO+r7ADp4Op4Vx86Gj8zeWJST3Y9ormqWYCLUej6UporHaCXqvVYr1eoq+U09pDHpY9wcqp42qCLG+9xMQypmKdRnLfQtF10PbWmU8WtSTWFsSEpLwyxaQyGDJJMT2ZINHPCSCbm0GkMnpVMfkGv5/qb6+JPHqhKaxXvVgV3KGf+8Gyhfsusg4MaTpaJPx4KnQISzgWUMnZ9cnmm2d5pzzPK23jW8xX3ix4nSNemf6Cmdm3vJfXB24ciu4PRfeGjSLaYdaace22WTLMGKkh0XhMts0LZpgUGuqmveF2C319h8jfqwmZOir3ao8Du5F113tT0kWxHl1/07vnA7xt16HxYeTb5kyTrWX9LVQfFOOi29h6aX1WjmId664+jlfwCuv7tDwQGPLnZGA+3vgdrmyWR8+kfvpJNoyNpiIEhyX0McOsm3sjEbjslPr1tDua3WIDnqETtEpZVZ7jCwFPCnZqU/qPhGDBYcq0huJv7EuwRHQBa6j3VbgDQayW1Or54NBsZgALNzZrAn/hpDR75vlQ9c19RCpZeQBdD44qNVD/qZR5a7UT3CU9I66dLdi+pXBoFrxqI0kl6LSqWF/BONynKyWFM4esAei5h1hk42iTeRcak+0cW/dfWe4mfINhjvHd9Sp83DwoA8MLq0r/GAkrb3gxK0vnOx2Qr+IxZHbYYPNbTIVnFYMhtdL1Smcrd/1OxMj43DPIhspeD1gOHOmdsxHrIe4u31oe7lBDSeXYUSojce2rITELhKw+TKoplo3q6ON6aKtHszNiGELILXHxbzJ7napDtbboxQtnPY2QxCys/RcKrtcILWY5LbPWTt+ZriLxZFtWW55cVcP62u+MHnshmW7vu5A1XZ2V2JGa3TfI9pfGypQsRjbjaBruPiFZVSwGelS1IGqFY5rHnHFD9pd1tQnsJosAJuWYHOpCJ1AtUrMBwsUPCTIoDDkCf8AjQY8vPfvySQAAAAASUVORK5CYII="
    return ( 
        <div>

            <div className="project-info">
                <h2>Our Aim and Goals</h2>
                <br />
                Our website aims to revolutionize productivity and combat procrastination by providing users with a comprehensive suite of tools designed to optimize time management and task completion. With features like the Pomodoro timer, clock, to-do list, file storage, and planner, our platform empowers users to effectively organize their day, stay focused, and accomplish their goals. By fostering a productive environment, we aspire to help individuals maximize their potential and achieve greater success in both their personal and professional lives. Looking ahead, our team is committed to continuously enhancing the platform by incorporating user feedback, implementing new features such as habit tracking and team collaboration tools, and expanding our reach to a wider audience through strategic partnerships and marketing initiatives. Ultimately, our goal is to become the go-to destination for anyone seeking to boost their productivity and overcome procrastination, enabling them to lead more fulfilling and accomplished lives.
            </div>
            <br />
            <hr />
            <br />
            <div className="project-info">
                <h2>Some Technical Details</h2>
                <br />
                This Project about Effencicy is out PBL Project for 2nd Year. We have managed to a website although non-responsive but we had lots of fun making it. This Website is made with famous TechStack: MERN. We have used <strong>MongoBD</strong> as our database and Schemas like "User", "Todo", "Task" , etc , using the mongoose API. Our Backend implemented via <strong>Express</strong> Library of JavaScript. Used <strong>JWT</strong> for Authentication, handeling users , routes, controllers , etc. Frontend made using <strong>React</strong> Library of Javascript, learning along various archtechure, Models, Client-Side Rendering and using the fetch API. However the project is still incomplete , we could have implemented a better state managment, use of advance hooks in react , good database schema and design , etc  but learning what to learn is the most important aspect of it.
            </div>
            <br />
            <hr />
            <br />
            <br />
            <h1>Our Team</h1>
            <div className="about-us-body">
                <div className="about-card">
                    <div className="about-img"><img className="sohamPFP" src={SohamPFP} alt="" /></div>
                    <div className="about-info">"Hello, I am Soham Joshi, Member of team in making of this project. Designed Backend , all the routes , controllers, and also implemented database and performed all crud operations and designed Frontend too." <a target="_blank" href="https://www.linkedin.com/in/sohamjoshi25/">@LinkedIn</a></div>
                </div>
                <div className="about-card about-flip">
                    <div className="about-img"><img src={DevayaniPFP}  alt="" /></div>
                    <div className="about-info">"Hello , I am Devayani Joshi." <a target="_blank" href="https://www.linkedin.com/in/devayani-joshi-280874269/">@LinkedIn</a></div>
                </div>
                <div className="about-card">
                    <div className="about-img"><img src={ShreyaPFP}  alt="" /></div>
                    <div className="about-info">"Hello, I'm Shreya Bonde student at Dr. D. Y. Patil Institute of Technology, second year, Information Technology department. My team and I have develop a website which will help students and working professional to manage their task and time efficiently. " <a target="_blank" href="https://www.linkedin.com/in/shreya-bonde-20aa0b259/">@LinkedIn</a></div>
                </div>
                <div className="about-card about-flip">
                    <div className="about-img"><img src={ShreyaPFP} alt="" /></div>
                    <div className="about-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, tempore, minus asperiores inventore sint explicabo beatae ducimus perspiciatis adipisci esse cupiditate praesentium temporibus! Perferendis veritatis enim asperiores quibusdam aperiam rem.</div>
                </div>
            </div> 
        </div>
    );
}
 
export default AboutUs;