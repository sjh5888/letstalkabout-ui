import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import jsonwebtoken from 'jsonwebtoken'
import "./CSS/navbar.css";
import NewPostModal from "./Modals/NewPostModal";
import { CategoryContext } from "./Context/CategoryContext";

function Navbar() {
  // const { categories, setCategories, jwt } = useContext(CategoryContext);
  const [modalOpen, updateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);  
  const jwtDecoded = jsonwebtoken.decode(localStorage.getItem('jwt'))
  
  console.log("is token valid? " + (jwtDecoded.exp > (Date.now()-(Date.now()%1000))/1000))
  console.log(jwtDecoded)

  if (jwtDecoded.exp > (Date.now()-(Date.now()%1000))/1000){
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
