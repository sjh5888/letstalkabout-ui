import React from "react";
import { Link } from "react-router-dom";
import '../CSS/card.css'

function ChannelCard(props) {
  return (
    <div className="card">
      <Link to={`/`}> {/*fix path and route later*/}
        <img src={props.channelImage} alt="" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <b>{props.channelName}</b>
          </h4>
          <p>{props.channelSubscribers} Subscribers</p>
        </div>
      </Link>
    </div>
  );
}
export default ChannelCard;
