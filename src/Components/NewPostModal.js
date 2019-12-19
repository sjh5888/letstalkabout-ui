import React, { useState, useEffect } from "react";
import { useFormState } from "react-use-form-state";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Autocomplete from "react-autocomplete";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function NewPostModal(props) {
  const [formState, { text }] = useFormState();
  const [isSuccess, updateSuccess] = useState();
  const [category, updateCategory] = useState();
  var categoryData = []; // seemes like categoryData needs to take an array of objects... so figure that out...
    // const dummyData = [
  //   { categoryName: "test1" },
  //   { categoryName: "test2" },
  //   { categoryName: "test40" },
  //   { categoryName: "test41" }
  // ];
  useEffect(() => {
    axios.get('http://localhost:8080/api/categories')
  .then(function (response) {
    console.log(response);
    categoryData = response.data
  },[])
  .catch(function (error) {
    console.log(error);
  });
  console.log("loaded the thing!")
  });

  const handleSubmit = e => {
    console.log("Values being submitted: " + JSON.stringify(formState.values));
    axios
      .post("http://localhost:8080/api/newThread", formState.values)
      .then(function(response) {
        console.log(response);
        updateSuccess(true);

        formState.clear();
        updateCategory("");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const categoryState = <input {...text("category")} />;
  console.log(formState.values);
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
              items={categoryData}
              shouldItemRender={(item, value) =>
                item.categoryName.toLowerCase().indexOf(value.toLowerCase()) >
                -1
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
