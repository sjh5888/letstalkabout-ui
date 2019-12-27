import React from "react";
import { Modal } from "react-bootstrap";

function ThreadFrame(props) {
  return (
    <Modal show={props.show}>
      <Modal.Body>
        <iframe
          src="https://threadreaderapp.com/thread/1209693350632157184.html"
          width="500"
          height="750"
          title="test"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}
export default ThreadFrame;
