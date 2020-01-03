import React, { useContext } from "react";
import { useFormState } from "react-use-form-state";
import { Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { loginUser } from "./Util/AxiosUtilUnauth";
import { LoginContext } from './Context/LoginContext'
import "./CSS/login.css";

function Login() {
  const {jwt, setJwt} = useContext(LoginContext)
  const [formState, { text, password }] = useFormState();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } }; //3. if nothing in the state, from is "/" 

  const login = e => {
    console.log("submitting... " + JSON.stringify(formState.values));
    loginUser(formState, setJwt, history, from, e); //pass these values to the authenticate function
  };
  console.log(formState.values);
  return (
    <div>
      <div
        style={{
          float: "left",
          width: "60%",
          padding: "10px",
          display: "flex",
          flex: "column"
        }}
      >
        <div
          className="bg"
          style={{ boxShadow: "0 4px 12px 12px rgba(0, 0, 0, 0.2)" }}
        ></div>
        <div className="fg">
          <h1 id="title">Let's talk about...</h1>
        </div>
      </div>
      <div style={{ float: "left", width: "40%", padding: "10px" }}>
        <span
          className="row"
          style={{ paddingLeft: "30px", paddingTop: "15px" }}
        >
          <div
            className="col-lg"
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <input
              {...text("username")}
              placeholder="Username or Email"
              className="form-control"
            />
          </div>
          <div
            className="col-lg"
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <input
              {...password("password")}
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div
            className="col-lg"
            style={{ paddingRight: "5px", paddingLeft: "5px" }}
          >
            <Button variant="outline-primary" onClick={e => login(e)}>
              Login
            </Button>
          </div>
        </span>
        <div className="row">
          <div
            style={{
              position: "absolute",
              top: "40%",
              right: "10%",
              left: "65%"
            }}
          >
            {" "}
            {/*this inline style centers its children using absolute positioning on the page... the right property will center relative to the div which is 40% of the page. */}
            <h1>What do you want to talk about?</h1>
            <p style={{ paddingTop: "30px", fontWeight: "bold" }}>
              Start talking today...
            </p>
            <Link to="/register">
              <Button variant="primary" size="lg" block>
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
