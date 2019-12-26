import React, {useState, useEffect} from 'react'
import ThreadCard from './ThreadCard'
import './card.css'
import {getThreads} from './AxiosUtil'
import {useParams} from 'react-router-dom'

function ThreadCardContainer(props){
  const [threads, setThreads] = useState([])
  const {category} = useParams()
  useEffect(()=>{
    console.log('Loading threads of category ' + category)
    getThreads(setThreads, category)
  },[])
  return(  
    <div className="paper">
      {threads.map(item => (
        <ThreadCard
          key={item}
          value={item}
        />
      ))}
    </div>
  );
   
}
export default ThreadCardContainer