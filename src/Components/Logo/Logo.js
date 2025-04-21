import "./Logo.css";
import LogoIcon from "../../Assets/Icons/ecometric-logo-v2.png";

export default function Logo(){
    return(
        <div className="logo-container">
            <a href="/" className="logo-holder">
                <img src={LogoIcon} 
                alt="Ecometric logo" 
                id="logo-content"
                />
            </a>
        </div>


    )
}