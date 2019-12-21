import React, {useContext} from "react";
import "./card.css";
import Card from "./Card";
import { CategoryContext } from "./CategoryContext";

function CardContainer() {
  // const [isLoading, updateLoading] = useState(true)
  const categoryData = useContext(CategoryContext)
  return (
    <div className="paper">
      {categoryData.map(item => (<Card key={item} value={item} categoryImage={item.categoryImage} itemId={item.id}/>))}
    </div>
  );
}
export default CardContainer;