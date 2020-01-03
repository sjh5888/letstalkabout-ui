import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import axios from "axios";
import "./CSS/navbar.css";
import NewPostModal from "./Modals/NewPostModal";

function Navbar(props) {
  const { jwt, setJwt } = useContext(LoginContext);
  const [modalOpen, updateModal] = useState(false);

  const verifyJwt = jwt => {
    console.log("verifying jwt");
    console.log("JWT: " + jwt);
    axios
      .post("http://localhost:8080/api/verifyJwt", jwt)
      .then(function(response) {
        console.log(response);

        if (response.status == 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch(function(error) {
        console.log(error);
        return false;
      });
  };

  if (verifyJwt) {
    return (
      <div>
        <ul className="navinator">
          {/* Home is going to be a list of users or topics i think and categories is going to be the categories under a given user.  */}
          <li className="navElement">
            <a href="/">Let's Talk About...</a>
          </li>
          <li className="navElement">
            <a href="/">Home</a>
          </li>
          <li className="navElement">
            <a href="/profile">Profile</a>
          </li>
          <li style={{ float: "right" }}>
            <a
              className="active"
              // href="#"
              onClick={e => updateModal(true)}
            >
              + New Post
            </a>
          </li>
          <li className="navElement" style={{ float: "right" }}>
            <a href="/login">Login</a>
          </li>
        </ul>
        <NewPostModal show={modalOpen} updateModal={updateModal} />
      </div>
    );
  } else {
    console.log("redirecting");
    return <Redirect to={{ pathname: "/login", state: { from: "/" } }} />;
  }
} //class

export default Navbar;
