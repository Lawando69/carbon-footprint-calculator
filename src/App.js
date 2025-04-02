import "./App.css";
import React, {useState} from "react";

export default function App(){
  const [electricity, setElectricity] = useState(0);
  const [gas, setGas] = useState(0);
  const [oil, setOil] = useState(0);
  const [mileage, setMileage] = useState(0);
  const [flights, setFlights] = useState(0);
  const [newspaper, setNewspaper] = useState(null);
  const [aluminumTin, setAluminumTin] = useState(null);
  const [footprint, setFootprint] = useState(null);

// NOTE: Feature to handle info on input change
  const handleElectricityChange = (e) => {setElectricity(Number(e.target.value));}
  const handleGasChange = (e) => {setGas(Number(e.target.value));}
  const handleOilChange = (e) => {setOil(Number(e.target.value));}
  const handleMileageChange = (e) => {setMileage(Number(e.target.value));}
  const handleFlightsChange = (e) => {setFlights(Number(e.target.value));}
  let totalFootprint = 0;

  // NOTICE: The values assigned to the constants might be set...
  function FootprintCalculator(yesNews, noNews, yesAlu, noAlu){
    const electricityFootprint = electricity * 105;
    const gasFootprint = gas * 105;
    const oilFootprint = oil * 113;
    const mileageFootprint = mileage * 0.79;
    const flightsFootprint = flights * 1100;
    const newspaperFootprint = 184;
    const aluminumTinFootprint = 166;


    // NOTE: Checks if newspaper / aluminum & tin are selected
    if(yesNews && yesAlu){
      totalFootprint = electricityFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + newspaperFootprint + aluminumTinFootprint;
    } else if(yesNews && noAlu){
      totalFootprint = electricityFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + newspaperFootprint;
    } else if(noNews && yesAlu){
      totalFootprint = electricityFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint + aluminumTinFootprint;
    } else if(noNews && noAlu){
      totalFootprint = electricityFootprint + gasFootprint + oilFootprint + mileageFootprint + flightsFootprint;
    }

    setFootprint(totalFootprint);
  };

  return(
    <div className="App">
      <h1>This is the Carbon Footprint Calculator</h1>
      <div className="calculator_content">
        <label>
          Monthly Electricity Usage: <input type="number" value={electricity} onChange={handleElectricityChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label>
          Monthly Gas Usage: <input type="number" value={gas} onChange={handleGasChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label>
          Monthly Oil Usage: <input type="number" value={oil} onChange={handleOilChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label>
          Yearly Mileage: <input type="number" value={mileage} onChange={handleMileageChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label>
          Yearly Flights: <input type="number" value={flights} onChange={handleFlightsChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label> Do you recycle newspaper?
          <input type="radio" name="newspaper" value="yes" onChange={() => setNewspaper("yes")}/> Yes
          <input type="radio" name="newspaper" value="no" onChange={() => setNewspaper("no")}/> No
        </label>
      </div>
      <div className="calculator_content">
        <label> Do you recycle aluminum and tin?
          <input type="radio" name="aluminumTin" value="yes" onChange={() => setAluminumTin("yes")}/> Yes
          <input type="radio" name="aluminumTin" value="no" onChange={() => setAluminumTin("no")}/> No
        </label>
      </div>
      <button onClick={() => FootprintCalculator(newspaper === "yes", newspaper === "no", aluminumTin === "yes", aluminumTin === "no")}>Calculate Carbon Footprint Usage</button>

      {footprint !== null && (
        <div>
          <h4>Total amount of carbon footprint usage: {footprint?.toFixed(2) || 0} pounds per year</h4>
        </div>
      )}
    </div>
  )
}
