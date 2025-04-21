import "./Home.css";
import tempImage from "../../Assets/Images/mediumWeight_image.jpg";

export default function Home(){
    return(
        <div className="home-container">
            {/* <h1>This is the Home Page</h1> */}
            <img src={tempImage} alt="Placeholder" className="home-image"/>
        </div>
    )
}