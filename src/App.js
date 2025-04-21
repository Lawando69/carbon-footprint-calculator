import "./App.css";
import DesktopNavbar from "./Components/DesktopNavbar/DesktopNavbar";
import Pages from "./Pages";

export default function App(){
  return(
    <div className="App">
      <DesktopNavbar/>
      <Pages/>
    </div>
  )
}