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
    <div className="categoryCard" onClick={e=>handleCick()}>
      <div>
        <h4>
          <b>{props.value.title}</b>
        </h4>
      </div>
    </div>
    <ThreadFrame show={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}
export default ThreadCard