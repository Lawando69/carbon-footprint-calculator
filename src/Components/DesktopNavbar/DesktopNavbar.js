import "./DesktopNavbar.css";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import profileIcon from "../../Assets/Icons/profile-icon.svg";

export default function DesktopNavbar(){
    return(
        <div className="desktop-navbar">
            <Logo id="logo"/>
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="footprint-calculator" className="nav-link">CARBON FOOTPRINT CALCULATOR</Link>
            <Link to="/booking" className="nav-link">BOOKING SCHEDULE</Link>
            <Link to="/auth" id="profile-icon"><img src={profileIcon} alt="profile"/></Link>
        </div>
    )
}