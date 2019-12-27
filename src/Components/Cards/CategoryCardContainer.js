import React, { useContext } from "react";
import "../CSS/card.css";
import CategoryCard from "./CategoryCard";
import { CategoryContext } from '../Context/CategoryContext'

function CategoryCardContainer() {
  // const [isLoading, updateLoading] = useState(true)
  const { categories, setCategories } = useContext(CategoryContext);
  return (
    <div className="paper">
      {categories.map(item => (
        <CategoryCard
          key={item}
          value={item}
          categoryImage={item.categoryImage}
          category={item.category}
          itemId={item.id}
        />
      ))}
    </div>
  );
}
export default CategoryCardContainer;
