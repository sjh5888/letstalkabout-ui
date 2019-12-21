import React, { useState, useEffect } from "react";
import "./App.css";
import { getCategories } from "./Components/AxiosUtil";
import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";
import {CategoryContext} from './Components/CategoryContext'

function App() {
  
  const [categories, setCategories] = useState([])
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    console.log("useEffect before calling get categories...")
    setCategories(getCategories())
    console.log("App's useEffect: " + categories)
    setLoading(false)
  }, [])

  if(isLoading){
    return(
      <p>Loading...</p>
    )
  }else{
  return (
    <CategoryContext.Provider value={categories}>

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
    </CategoryContext.Provider>
  )
  }//else

}
export default App;
