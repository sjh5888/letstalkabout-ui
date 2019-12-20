import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";

function App() {
  const [categoryData, updateCategoryData] = useState([]); //holds data acquired from backend

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get("http://localhost:8080/api/categories")
      .then(function(response) {
        console.log(response);
        console.log(response.data.categories);
        updateCategoryData(response.data.categories);
        console.log("loaded category data from backend.");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div style={{height:"100%",overflow:"hidden"}}>
      
      <Navbar
        categoryData={categoryData}
        getCategories={getCategories} //load categories in card container class now...
      />
      
      <div className="row">
        <div className="column left"></div>
        <div className="column middle">
          <CardContainer categoryData={categoryData}/>
        </div>
        <div className="column right"></div>
      
      </div>
    </div>
  );
}

export default App;
