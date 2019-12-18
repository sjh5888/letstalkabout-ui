import React, { useState } from "react";
import { useFormState } from "react-use-form-state";
import { Modal, Button } from "react-bootstrap";
// import TextField from '@material-ui/core/TextField'
// import Autocomplete from '@material-ui/lab/Autocomplete'
import Autocomplete from "react-autocomplete";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function NewPostModal(props) {
  const [formState, { text }] = useFormState();
  const [isSuccess, updateSuccess] = useState();
  const [category, updateCategory] = useState();

  const handleSubmit = e => {
    // formState.values.category =
    //axios logic here
    // formState.clear()
    updateSuccess(true);
    console.log("Values being submitted: " + JSON.stringify(formState.values));
  };
  const dummyData = [
    { categoryName: "test1" },
    { categoryName: "test2" },
    { categoryName: "test40" },
    { categoryName: "test41" }
  ];
  const handleChange = event => {
    updateCategory(event.target.value);

    // console.log(category1)
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
          {/* <input {...text('category')} placeholder="Category" className="form-control"/> */}
          <Autocomplete //need to fix styling and then we good! https://github.com/reactjs/react-autocomplete
            items={dummyData}
            shouldItemRender={(item, value) =>
              item.categoryName.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={item => item.categoryName}
            renderItem={(item, highlighted) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: highlighted ? "#eee" : "transparent"
                }}
              >
                {item.categoryName}
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
