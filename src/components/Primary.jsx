import React, {useState} from 'react'

import primaryImages from '../primaryImgs'


export default function Primary(props) {

    const randonN = Math.floor(Math.random() * 6);
    
    const [primary, setPrimary] = useState(randonN)

    function generate () {
    
        setPrimary( Math.floor(Math.random() * 6))
      }
    
    const image = primaryImages[primary].src
  return (
    <div className='primaryContainer'>
        <button className='bottone' onClick={generate}>Generate Primary</button>
        <img src={image} className='primaryImg'  ></img>
    </div>
  )
}
