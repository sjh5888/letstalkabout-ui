import React from "react";
import "./card.css";

import Card from "./Card";

function CardContainer(props) {
  return (
    <div className="paper">
      {props.categoryData.map(item => (
        <Card key={item} value={item} categoryImage={item.categoryImage}/>
      ))}
    </div>
  );
}
export default CardContainer;
