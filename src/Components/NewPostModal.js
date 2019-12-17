import React, {useState} from 'react'
import {useFormState} from 'react-use-form-state'
import {Modal, Button} from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function NewPostModal(props){
  const [formState, {text}] = useFormState()
  const [isSuccess, updateSuccess] = useState()
  
  const handleSubmit = (e) =>{
    formState.clear()
    updateSuccess(true)
  }
  console.log(formState.values)
   return(
    <Modal show={props.show}>
    <Modal.Header>
      <Modal.Title>New Post</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <form>
        <input {...text('url')} placeholder="URL" className="form-control"/><br/>
        <input {...text('title')} placeholder="Title" className="form-control"/><br/>
        <input {...text('category')} placeholder="Category" className="form-control"/>
        <span><p style={{color:"green"}}>Success!</p></span>
      </form>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="primary" onClick={(e)=> handleSubmit(e)}>Submit</Button>
      <Button variant="secondary" onClick={(e)=>props.updateModal(false)}>Close</Button>
    </Modal.Footer>
  </Modal>
   )
}
export default NewPostModal
