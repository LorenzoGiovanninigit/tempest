import React, {useState} from 'react'


import images from '../images'

// third party import





export default function CardDeploy(props) {
  //generating random n for image array
  const randonN = Math.floor(Math.random() * 6);
  const [num, setNum] = useState(randonN)


  
  
  // picking deployment
  function generate () {
    
    setNum( Math.floor(Math.random() * 6))
  }
  

  console.log(randonN)
  const image = images[num].src
  return (
    <div className='deployContainer'>
      <button variant='contained' onClick={generate} className='bottone'>genera Schieramento
      </button>
      <img alt='deploy' className='deployImg'  src={image} >

      </img>
    </div>
  )
}
