import React, { useContext, useState } from "react";
import { CategoryContext } from "../Context/CategoryContext";
import { useFormState } from "react-use-form-state";
import { Modal, Button } from "react-bootstrap";
import { setCategoryImage } from "../Util/AxiosUtil"; //call this function to submit to backend

function ImageModal(props) {
  const [formState, { text }] = useFormState();
  const { categories, setCategories } = useContext(CategoryContext);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = e => {
    formState.values.category = props.catObject.category;
    formState.values.categoryId = props.catObject.id;
    setCategoryImage(formState.values, setCategories,setHasError, props.setModalOpen) //passes the new object and setCategories from context so that getCategories will trigger a rerender.
  };
  // eslint-disable-next-line
  const catBox = <input {...text("category")} />;
  // eslint-disable-next-line
  const idBox = <input {...text("categoryId")} />;
  console.log(formState.values);
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Set Category Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label>
            Paste the URL to the picture you would like for the category.
          </label>
          <input
            {...text("categoryImage")}
            placeholder="Image URL"
            className="form-control"
          />
          <span>{hasError ? <p style={{color:"red"}}><i>An Error Occurred</i></p> : null}</span>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={e => handleSubmit(e)}>
          Submit
        </Button>
        <Button variant="secondary" onClick={e => props.setModalOpen(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ImageModal;
