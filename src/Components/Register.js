import React, { useState } from "react";
import { useFormState } from "react-use-form-state";
import { Button } from "react-bootstrap";
import { saveNewUser, checkForDuplicates } from "./Util/AxiosUtil";
import {useHistory} from 'react-router-dom'
//TODO: Add validation for security
function Register() {
  const [formState, { text, password, email, checkbox }] = useFormState();
  const [isTaken, setIsTaken] = useState(false);
  // const [wasSuccess, updateSuccess] = useState();
  let history = useHistory();

  const handleSubmit = e => {
    console.log("submitting... " + JSON.stringify(formState.values));
    saveNewUser(formState, history);
    // console.log("was success? " + wasSuccess)
  };
  const checkDuplicates = e => {
    checkForDuplicates(e.target.value, setIsTaken);
  };
  console.log(formState.values);
  return (
    <div className="register-bg">
      <div className="register-container">
        <div style={{ height: "60px" }} className="header">
          <h2>Create your account</h2>
        </div>
        <form className="form-grp">
          <input
            {...email("email")}
            placeholder="Email"
            className="form-control form-control-lg"
          />
          <br />
          <input
            {...text({ name: "username", onChange: e => checkDuplicates(e) })}
            placeholder="Username"
            className="form-control form-control-lg"
          />
          {isTaken ? (
            <span>
              <p style={{ fontStyle: "italic", color: "red" }}>
                This username is already in use
              </p>
            </span>
          ) : null}
          <br />
          <input
            {...password("password")}
            placeholder="Password"
            className="form-control form-control-lg"
          />
          <br />
          <span style={{ display: "flex" }}>
            <input
              {...checkbox("hasAcceptedTerms")}
              className="form-check"
              style={{ marginTop: "-20px" }}
            />
            <label style={{ paddingLeft: "15px" }}>
              <p>I have read and hereby accept the terms and conditions.</p>
            </label>
          </span>
          <Button variant="primary" block onClick={e => handleSubmit(e)}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Register;
