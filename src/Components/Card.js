import React from 'react'
import './card.css'
import axios from 'axios'

function Card(props){
  const handleClick = (e)=>{
    
  }
  console.log(props.value)
  return(
    <div className="card"> 
      {props.categoryImage !== null ? <img src={props.categoryImage} alt="" style={{width:"100%"}}/> :
      <img src="/plus.png" alt="" style={{width:"100%"}} onClick={(e)=>handleClick}/>}
      <div className="container">
        <h4><b>{props.value.category}</b></h4>
        <p>test</p>
      </div>
    </div>
  )
}

export default Card