import React, { useState } from "react";
import { useFormState } from "react-use-form-state";
import { Button } from "react-bootstrap";
import { saveNewUser, checkForDuplicates } from "./Util/AxiosUtilUnauth";
import { useHistory } from "react-router-dom";

function Register() {
  const [formState, { text, password, email, checkbox }] = useFormState();
  const [isTaken, setIsTaken] = useState(false);
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
            {...email({
              name: "email",
              validateOnBlur: true,
              validate: (value, values, event) => {
                if (!value.trim()) {
                  return "Email is required";
                }
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"']+(\.[^<>()[\]\\.,;:\s@"']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRegex.test(value)) {
                  return "Please enter a valid email";
                }
              } //validate func
            })}
            placeholder="Email"
            className="form-control form-control-lg"
          />
          {formState.validity.email ? null : (
            <span>
              <p style={{ fontStyle: "italic", color: "red" }}>
                {formState.errors.email}
              </p>
            </span>
          )}
          <br />
          <input
            {...text({
              name: "username",
              onChange: e => checkDuplicates(e),
              validateOnBlur: true,
              validate: (value, values, event) => {
                if (!value.trim()) {
                  return "Please enter your display name";
                }
                const usernameRegex = /^([^<>()[\]\\.,;:\s@#!^*{}$%"']{1,})$/;
                const usernameLengthRegex = /^.{1,20}$/;
                if (!usernameLengthRegex.test(value)) {
                  return "Usernames must be 20 characters or fewer.";
                }
                if (!usernameRegex.test(value)) {
                  return "Usernames may contain alphanumerics, _ and -.";
                }
              } //validate func
            })}
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
          {formState.validity.username ? null : (
            <span>
              <p style={{ fontStyle: "italic", color: "red" }}>
                {formState.errors.username}
              </p>
            </span>
          )}
          <br />
          <input
            {...password({
              name: "password",
              validateOnBlur: true,
              validate: (value, values, event) => {
                if (!value.trim()) {
                  return "Password is required";
                }
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[\w!@#$%^&*()-+={}[\]\\|~`<>,./?'":;]{8,40}$/;
                if (!passwordRegex.test(value)) {
                  return "Passwords must be between 8 and 40 characters in length and contain at least 1 number";
                }
              } //validate func
            })}
            placeholder="Password"
            className="form-control form-control-lg"
          />
          {formState.validity.password ? null : (
            <span>
              <p style={{ fontStyle: "italic", color: "red" }}>
                {formState.errors.password}
              </p>
            </span>
          )}
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
          <Button
            variant="primary"
            block
            onClick={e => handleSubmit(e)}
            disabled={(
              (formState.values.email === "" || formState.validity.email === false) ||
              (formState.values.username === "" || formState.validity.username === false) ||
              (formState.values.password === "" || formState.validity.password === false)||
              formState.values.hasAcceptedTerms === false)
                ? "disabled"
                : null
            }
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}
export default Register;
