import React from "react";
import { useFormState } from "react-use-form-state";
import { Modal, Button } from "react-bootstrap";
import {updateCategoryImage} from './AxiosUtil' //call this function to submit to backend

function ImageModal(props){
  const [formState, { text }] = useFormState();
  const handleSubmit = e =>{
    formState.values.category = props.catObject.category
    formState.values.categoryId = props.catObject.id
    updateCategoryImage(formState.values)
    // console.log(formState.values)
  }
  // eslint-disable-next-line
  const catBox = <input {...text('category')}  />
  // eslint-disable-next-line
  const idBox = <input {...text('categoryId')} />
  console.log(formState.values)
  return(
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Set Category Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label>Paste the URL to the picture you would like for the category.</label>
          <input {...text('categoryImage')} placeholder="Image URL" className="form-control"/>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={e => handleSubmit(e)}>
          Submit
        </Button>
        <Button variant="secondary" onClick={e => props.updateModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ImageModal