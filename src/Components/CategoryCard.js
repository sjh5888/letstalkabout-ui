import React, { useState } from "react";
import ImageModal from "./ImageModal";
import { Link } from "react-router-dom";
import "./card.css";

function CategoryCard(props) {
  const [modalOpen, updateModalOpen] = useState(false);

  const handleClick = e => {
    updateModalOpen(true);
  };
  // console.log(props.value.categoryImage)
  return (
    <div className="card">
      {props.categoryImage !== "" ? (
        <Link to={`/profile/threads/${props.category}`}>
          <img src={props.categoryImage} alt="" style={{ width: "100%" }} />
        </Link>
      ) : (
        <img
          src="/plus.png"
          alt=""
          style={{ width: "100%" }}
          onClick={e => handleClick()}
        />
      )}
      <div className="container">
        <h4>
          <b>{props.value.category}</b>
        </h4>
        <p>test</p>
      </div>
      <ImageModal
        show={modalOpen}
        updateModal={updateModalOpen}
        catObject={props.value}
      />
    </div>
  );
}
export default CategoryCard;
