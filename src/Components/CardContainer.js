import React, {useState,useEffect} from "react";
import "./card.css";
import Card from "./Card";
import {getCategories} from './AxiosUtil'

function CardContainer() {
  const [categoryData, updateCategoryData] = useState([]); //holds data acquired from backend
  const [isLoading, updateLoading] = useState(true)

  useEffect(() => {
    console.log("CardContaner Useeffect loading from backend...")
    updateCategoryData(getCategories());
    updateLoading(false)
  }, []);

  console.log("CardContainer's data: " + categoryData)
  return (
    <div className="paper">
      {isLoading ? <p>Loading...</p> : categoryData.map(item => (<Card key={item} value={item} categoryImage={item.categoryImage} itemId={item.id}/>))}
    </div>
  );
}
export default CardContainer;
