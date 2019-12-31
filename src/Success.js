import React from "react";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Success() {
  return (
    <div className="register-bg">
      <div className="register-container">
        <div style={{ height: "60px" }} className="header">
          <h2>Account Created!</h2>
        </div>
        <div className="form-grp">
          <h4>Congratulations, you are all set up!</h4><br/>
          <Link to="/login"> 
            <Button variant="primary" block>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Success;
