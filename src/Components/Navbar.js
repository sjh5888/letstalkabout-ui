import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import "./CSS/navbar.css";
import NewPostModal from "./Modals/NewPostModal";

function Navbar(props) {
  const [modalOpen, updateModal] = useState(false);
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
      <NewPostModal 
        show={modalOpen} 
        updateModal={updateModal} 
        />
    </div>
  );
}

export default Navbar;
