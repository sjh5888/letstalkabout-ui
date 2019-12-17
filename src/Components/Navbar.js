import React, {useState} from 'react'
import './navbar.css'

import NewPostModal from './NewPostModal'

function Navbar(){
  const [modalOpen, updateModal] = useState(false)
  console.log(modalOpen)
  return(
    <div>
      <ul>
        {/* Home is going to be a list of users or topics i think and categories is going to be the categories under a given user.  */}
        <li><a href="#home">Let's Talk About...</a></li> 
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li style={{float:"right"}}><a className="active" href="#newPost" onClick={(e)=>updateModal(true)}> + New Post</a></li>
      </ul>
      <NewPostModal 
      show={modalOpen} 
      updateModal={updateModal}
      />
    </div>
  )
}

export default Navbar