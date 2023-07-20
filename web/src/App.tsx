import { useState } from "react";
import Map from "./components/Map";
import Searchbar from "./Searchbar";
import Route from "./Route";
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
      <div style={{
        position:'absolute',
        bottom:'0px',
        width:'100%',
        zIndex:'500',
      }}>
        <Route/>
      </div>
    </div>
  );
}

export default App;
