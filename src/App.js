import "./App.css";
import React, {useState} from "react";

export default function App(){
  const [monthlyElectricity, setMonthlyElectricity] = useState(0);
  const [monthlyGas, setMonthlyGas] = useState(0);
  const [monthlyOil, setMonthlyOil] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [yearlyFlights, setYearlyFlights] = useState(0);
  const [newspaper, setNewspaper] = useState(null);
  const [aluminumTin, setAluminumTin] = useState(null);
  const [footprint, setFootprint] = useState(null);

  // NOTE: Handles input Change
  const handleElectricityChange = (e) => {setMonthlyElectricity(Number(e.target.value));}
  const handleGasChange = (e) => {setMonthlyGas(Number(e.target.value));}
  const handleOilChange = (e) => {setMonthlyOil(Number(e.target.value));}
  const handleMileageChange = (e) => {setYearlyMileage(Number(e.target.value));}
  const handleFlightsChange = (e) => {setYearlyFlights(Number(e.target.value));}
  let totalFootprint = 0;

  
  function FootprinCalculator(yesNews, noNews, yesAlu, noAlu){
    const electricityFootprint = monthlyElectricity * 105;
    const gasFootprint = monthlyGas * 105;
    const oilFootprint = monthlyOil * 113;
    const mileageFootprint = yearlyMileage * 0.79;
    const flightsFootprint = yearlyFlights * 1100;
    const newspaperFootprint = 184;
    const aluminumTinFootprint = 166;

    // NOTE: Checks to see newspaper / aluminum & tin are selected
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
          <input type="number" placeholder="Monthly Electricity Usage" value={monthlyElectricity} onChange={handleElectricityChange}/>
          <input type="number" placeholder="Monthly Gas Usage" value={monthlyGas} onChange={handleGasChange}/>
          <input type="number" placeholder="Monthly Oil Usage" value={monthlyOil} onChange={handleOilChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label>
          <input type="number" placeholder="Yearly Mileage" value={yearlyMileage} onChange={handleMileageChange}/>
          <input type="number" placeholder="Yearly Flights" value={yearlyFlights} onChange={handleFlightsChange}/>
        </label>
      </div>
      <div className="calculator_content">
        <label> Do you Recycle newspaper?
          <input type="radio" value="yes" name="newspaper" onChange={() => setNewspaper("yes")} defaultChecked/> Yes
          <input type="radio" value="no" name="newspaper" onChange={() => setNewspaper("no")}/> No
        </label>
        <label> Do you recycle aluminum and tin?
          <input type="radio" value="yes" name="aluminumTin" onChange={() => setAluminumTin("yes")} defaultChecked/> Yes
          <input type="radio" value="no" name="aluminumTin" onChange={() => setAluminumTin("no")}/> No
        </label>
      </div>
      <button onClick={() => FootprinCalculator(newspaper === "yes", newspaper === "no", aluminumTin === "yes", aluminumTin === "no")}>Calculate Carbon Footprint Usage</button>

      {footprint !== null && (
        <div>
          <h4>Total amount of Carbon Footprint Usage: {footprint?.toFixed(2) || 0} pounds per year</h4>
        </div>
      )}
    </div>
  )
}