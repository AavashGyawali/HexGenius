import { useState } from "react";
import Map from "./components/Map";
import "./App.css";

function App() {
  const [address, setAddress] = useState("");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Map setAddress={setAddress} />
    </div>
  );
}

export default App;
