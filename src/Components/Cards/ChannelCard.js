import React from "react";
import { Link } from "react-router-dom";
import '../CSS/card.css'

function ChannelCard(props) {
  return (
    <div className="box card">
      {/*<Link to={`/`}> fix path and route later*/}
        <img src={props.channelImage} alt="" className="channelImage"/>
        <div className="container">
          <h4>
            <b>{props.channelTitle}</b>
          </h4>
          <p>{props.channelSubscribers} Subscribers</p>
        </div>
      {/* </Link> */}
    </div>
  );
}
export default ChannelCard;
