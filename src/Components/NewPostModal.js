import React, {useState} from 'react'
import {useFormState} from 'react-use-form-state'
import {Modal, Button} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function NewPostModal(props){
  const [formState, {text}] = useFormState()
  const [isSuccess, updateSuccess] = useState()
  
  const handleSubmit = (e) =>{
    formState.clear()
    updateSuccess(true)
  }
  const dummyData = [
    {categoryName: "test1"},
    {categoryName: "test2"},
    {categoryName: "test40"},
    {categoryName: "test41"}
  ]
  console.log(formState.values)
   return(
    <Modal show={props.show}>
    <Modal.Header>
      <Modal.Title>New Post</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
      <form>
        <input {...text('threadURL')} placeholder="Thread URL" className="form-control"/><br/>
        <input {...text('title')} placeholder="Title" className="form-control"/><br/>
        <input {...text('videoURL')} placeholder="Video URL" className="form-control"/>
        {/* <input {...text('category')} placeholder="Category" className="form-control"/> */}
        <Autocomplete
          id="categories"
          freeSolo
          options={dummyData.map(option => option.categoryName)}
          renderInput={params => (
            <TextField {...params} margin="normal" fullWidth label="Category"/>
          )} />
        {isSuccess ? <span><p style={{color:"green"}}>Success!</p></span> : null}
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
