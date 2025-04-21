import Home from "./Pages/Home/Home";
import Footprint from "./Pages/Footprint/Footprint";
import Booking from "./Pages/Booking/Booking";
import Auth from "./Pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";

export default function Pages(){
    return(
        <div id="page-content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/footprint-calculator" element={<Footprint/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/auth" element={<Auth/>}/>
            </Routes>
        </div>
    )
}