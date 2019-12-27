import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Components/CSS/App.css";
import { getCategories } from "./Components/Util/AxiosUtil";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import { CategoryContext } from "./Components/Context/CategoryContext";

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect before calling get categories...");
    getCategories(setCategories);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <div style={{ height: "100%", overflow: "hidden" }}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </CategoryContext.Provider>
    );
  } //else
}
export default App;
