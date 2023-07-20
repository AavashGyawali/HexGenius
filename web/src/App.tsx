import { useState } from "react";
import Map from "./components/Map";
import Searchbar from "./Searchbar";
import "./App.css";

function App() {
  const [address, setAddress] = useState("");
  return (
    
    <div>
      <div style={{
        position:'absolute',
        top:'10px',
        right:'10px',
        zIndex:"500"
      }}  >
        <Searchbar/>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position:"relative"
        }}
      >
        <Map setAddress={setAddress} />
      
      </div>
    </div>
  );
}

export default App;
