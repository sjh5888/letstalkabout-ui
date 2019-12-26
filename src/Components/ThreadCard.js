import React from 'react'
import "./card.css";

function ThreadCard(props){
  return(
    <div className="categoryCard">
      <div>
        <h4>
          <b>{props.value.title}</b>
        </h4>
      </div>
    </div>
  )
}
export default ThreadCard