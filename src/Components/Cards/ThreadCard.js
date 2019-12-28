import React, {useState} from 'react'
import ThreadFrame from '../Modals/ThreadFrame'
import "../CSS/card.css";

function ThreadCard(props){
  const [modalOpen, setModalOpen] = useState(false)
  const handleCick = e =>{
    setModalOpen(true)
  }
  return(
    <div>
    <div className="rectangle card" style={{float:"left", width:"100%"}} onClick={e=>handleCick()}>
      <div style={{float:"left", width:"25%",padding:"15px"}}>
        <img src={props.value.threadImage} alt="error" className="threadImage"/>
      </div>
      <div style={{float:"left", width:"60%",flexWrap:"wrap"}}>
        <h4>
          <b>{props.value.threadTitle}</b>
        </h4>
        <div>
          <p style={{marginTop:"30px"}}>{props.value.threadDescription}</p>
        </div>
      </div>
      <div style={{float:"right", width:"15%",position:"absolute",bottom:"-10px",right:"10px"}}>
        <p style={{textAlign:"right"}}><b>{props.value.threadChannel}</b></p>
      </div>
    </div>
    <ThreadFrame show={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}
export default ThreadCard