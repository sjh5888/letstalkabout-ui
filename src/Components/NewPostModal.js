import React, { useState, useContext } from "react";
import { useFormState } from "react-use-form-state";
import { Modal, Button } from "react-bootstrap";
// import axios from "axios";
import Autocomplete from "react-autocomplete";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {getCategories, saveNewCategory, saveNewThread} from './AxiosUtil'
import { CategoryContext } from "./CategoryContext";

function NewPostModal(props) {
  const [formState, { text }] = useFormState(); //sets state of form controls
  const [isSuccess, updateSuccess] = useState(); //flag for successful submission
  const [category, updateCategory] = useState(); //holds current value of autocomplete box

  const {categories, setCategories} = useContext(CategoryContext) //accessing value passed from value prop in the provider tag within app.js

  const handleSubmit = e => {
    console.log("Values being submitted: " + JSON.stringify(formState.values));
    var newCat = {
      category: formState.values.category,
      categoryImage: ""
    }
    console.log(newCat)
    saveNewCategory(newCat) //unecessary use of resources? even if the cat is already there, it still has to check?
    saveNewThread(formState, updateCategory, updateSuccess)
    getCategories(setCategories) //reload new categories
  }
    
  // eslint-disable-next-line
  const categoryStateBox = <input {...text("category")} />;
  console.log("formstate.values: " + JSON.stringify(formState.values))

  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            {...text("threadURL")}
            placeholder="Thread URL"
            className="form-control"
          />
          <br />
          <input
            {...text("title")}
            placeholder="Title"
            className="form-control"
          />
          <br />
          <input
            {...text("videoURL")}
            placeholder="Video URL"
            className="form-control"
          />
          <br />
          <span style={{ width: "100%" }}>
            
            <Autocomplete // https://github.com/reactjs/react-autocomplete
              inputProps={{
                className: "form-control",
                placeholder: "Category"
              }}
              items={categories}
              shouldItemRender={(item, value) =>
                item.category.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.category}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent"
                  }}
                >
                  {item.category}
                </div>
              )}
              value={category}
              onChange={e => {
                updateCategory(e.target.value);
                formState.values.category = e.target.value;
              }}
              onSelect={value => {
                updateCategory(value);
                formState.values.category = value;
                console.log(value);
              }}
            />
          </span>
          {isSuccess ? (
            <span>
              <p style={{ color: "green" }}>Success!</p>
            </span>
          ) : null}
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
  );
}
export default NewPostModal;