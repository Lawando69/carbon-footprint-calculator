import "./CarbonFootprint.css";
import React, {useState} from "react";

export default function CarbonFootprint(){
    const [electric, setElectric] = useState(0);
    const [gas, setGas] = useState(0);
    const [oil, setOil] = useState(0);
    const [mileage, setMileage] = useState(0);
    const [flights, setFlights] = useState(0);
    const [newspaper, setNewspaper] = useState(null);
    // NOTE: ExWaste consists of aluminum and tin
    const [exWaste, setExWaste] = useState(null);
    const [footprint, setFootprint] = useState(null);

    // NOTE: Handles change of input
    const handleElectricChange = (e) => {setElectric(Number(e.target.value));}
    const handleGasChange = (e) => {setGas(Number(e.target.value));}
    const handleOilChange = (e) => {setOil(Number(e.target.value));}
    const handleMileageChange = (e) => {setMileage(Number(e.target.value));}
    const handleFlightsChange = (e) => {setFlights(Number(e.target.value));}
    let totalFootprint = 0;

    // NOTE: Function to calculate total amount of footprint
    function FootprintCalculator(Ynews, Nnews, Yalu, Nalu){
        const electricFootprint = electric * 105;
        const gasFootprint = gas * 105;
        const oilFootprint = oil * 113;
        const mileageFootprint = mileage * 0.79;
        const flightsFootprint = flights * 1100;
        const newspaperFootprint = 184;
        const exWasteFootprint = 166;

        // NOTE: Checks if radio inputs have been selected
        if(Ynews && Yalu){
            totalFootprint = electricFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + newspaperFootprint + exWasteFootprint;
        } else if (Ynews && Nalu){
            totalFootprint = electricFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + newspaperFootprint;
        } else if (Nnews && Yalu){
            totalFootprint = electricFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + exWasteFootprint;
        } else if (Nnews && Nalu){
            totalFootprint = electricFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint;
        }
        setFootprint(totalFootprint);
    }

    return(
        <div className="footprint-container">
            <h1>This is the carbon Footprint Calculator Page</h1>
            <div className="footprint-holder">
                <div className="footprint-top">
                    <div className="footprint-content inputs">
                        <label>
                            Monthly Electric Usage: <input type="number" value={electric} onChange={handleElectricChange}/>
                        </label>
                    </div>
                    <div className="footprint-content inputs">
                        <label>
                            Monthly Gas Usage: <input type="number" value={gas} onChange={handleGasChange}/>
                        </label>
                    </div>
                    <div className="footprint-content inputs">
                        <label>
                            Monthly Oil Usage: <input type="number" value={oil} onChange={handleOilChange}/>
                        </label>
                    </div>
                    <div className="footprint-content inputs">
                        <label>
                            Yearly Mileage: <input type="number" value={mileage} onChange={handleMileageChange}/>
                        </label>
                    </div>
                    <div className="footprint-content inputs">
                        <label>
                            Yearly Flights: <input type="number" value={flights} onChange={handleFlightsChange}/>
                        </label>
                    </div>
                </div>
                <div className="footprint-bottom">
                    <div className="footprint-content radio">
                        <lable> Do you recycle newspaper?
                            Yes <input type="radio" name="newspaper-footprint" value="yes" onChange={() => setNewspaper("Yes")} defaultChecked/>
                            No <input type="radio" name="newspaper-footprint" value="no" onChange={() => setNewspaper("No")}/>
                        </lable>
                    </div>
                    <div className="footprint-content radio">
                        <lable> Do you recycle Aluminum and Tin?
                            Yes <input type="radio" name="waste-footprint" value="yes" onChange={() => setExWaste("Yes")} defaultChecked/>
                            No <input type="radio" name="waste-footprint" value="no" onChange={() => setExWaste("No")}/>
                        </lable>
                    </div>
                </div>
                <button type="submit" onClick={() => FootprintCalculator(newspaper === "Yes", newspaper === "No", exWaste === "Yes", exWaste === "No")}>Calculate Footprint</button>

                {footprint !== null && (
                    <div className="footprint-final">
                        <h1>Total Footprint: {footprint?.toFixed(2) || 0} pounds/y</h1>
                    </div>
                )}

                {footprint === 0 && (
                    <div className="footprint-error">
                        <h1> Please ensure you've entered an input</h1>
                    </div>
                )}

            </div>
        </div>
    )
}