import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import "./Components/CSS/App.css";
import { getCategories } from "./Components/Util/AxiosUtil";
import { verifyJwt } from "./Components/Util/AxiosUtilUnauth";
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
  const [isLoading, setLoading] = useState(false); //change the place where this is defined and manipulated.
  const [jwt, setJwt] = useState(null);
  const [isJwtValid, setIsJwtValid] = useState(false);
  // const history = useHistory();

  // useEffect(() => {
  //   console.log("useEffect before calling get categories...");
  //   getCategories(setCategories);
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    //before rendering anything verify jwt
    verifyJwt(jwt, setIsJwtValid, isJwtValid);
    console.log("Jwt: " + JSON.stringify(jwt) + " is valid? " + isJwtValid);
  }, [jwt, isJwtValid]);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route //1. this is hit first when "/" is input...
        {...rest}
        render={({ location }) =>
          isJwtValid ? (
            children
          ) : (
            <Redirect //2. redirect to login page with state transferred to that function
              to={{
                pathname: "/login",
                state: { from: location } //2. this saves the intended page ("/")
              }}
            />
          )
        }
      />
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <LoginContext.Provider value={{ jwt, setJwt, isJwtValid }}>
        <div style={{ height: "100%", overflow: "hidden" }}>
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
        </div>
      </LoginContext.Provider>
    );
  } //else
}
export default App;
