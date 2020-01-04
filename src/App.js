import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import "./Components/CSS/App.css";
import { getCategories } from "./Components/Util/AxiosUtil";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Success from "./Success";
import { CategoryContext } from "./Components/Context/CategoryContext";
import { LoginContext } from "./Components/Context/LoginContext";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(null); //change the place where this is defined and manipulated.
  const [jwt, setJwt] = useState({ jwt: localStorage.getItem("jwt") });

  // useEffect(() => {
  //   console.log("useEffect before calling get categories...");
  //   getCategories(setCategories);
  //   setLoading(false);
  // }, []);

  function PrivateRoute({ children, ...rest }) {
    console.log("Is jwt null? " + JSON.stringify(jwt));
    return (
      //1. this is hit first when a protected route is input...
      <Route
        {...rest}
        render={({ location }) =>
          //2. redirect to login page with state transferred to that function
          //2. this saves the intended proteceted page

          jwt.jwt !== null ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      />
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div style={{ height: "100%", overflow: "hidden" }}>
        <LoginContext.Provider value={{ jwt, setJwt }}> {/*Context is necessary here in order to trigger a rerender whem jwt is updated at Login... otherwise the jwt will be set, but the jwt state in app will not be updated */}
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>
              <Route path="/success">
                <Success />
              </Route>

              <CategoryContext.Provider value={{ categories, setCategories }}>
                <PrivateRoute path="/profile">
                  <Navbar />
                  <Profile />
                </PrivateRoute>
                <PrivateRoute path="/">
                  <Navbar />
                  <Home />
                </PrivateRoute>
              </CategoryContext.Provider>
            </Switch>
          </Router>
        </LoginContext.Provider>
      </div>
    );
  } //else
}
export default App;
