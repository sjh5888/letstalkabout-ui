import React, { useState } from "react";
import ImageModal from "../Modals/ImageModal";
import { Link } from "react-router-dom";
import "../CSS/card.css";

function CategoryCard(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = e => {
    setModalOpen(true);
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
      <Link to={`/profile/threads/${props.category}`}>
        <div className="container">
          <h4>
            <b>{props.value.category}</b>
          </h4>
          <p>test</p>
        </div>
      </Link>
      <ImageModal
        show={modalOpen}
        setModalOpen={setModalOpen}
        catObject={props.value}
      />
    </div>
  );
}
export default CategoryCard;
