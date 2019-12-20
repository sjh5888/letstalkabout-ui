import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";

function App() {
  return (
    <div style={{height:"100%",overflow:"hidden"}}>
      <Navbar/>
      <div className="row">
        <div className="column left"></div>
        <div className="column middle">
          <CardContainer/>
        </div>
        <div className="column right"></div>
      
      </div>
    </div>
  );
}
export default App;
