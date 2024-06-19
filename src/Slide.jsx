import { useState } from 'react'
import { imageSlide } from './constants'

const Slide = () => {
    const [currentState, setCurrentState] = useState(0)
    const gbImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
  return (
    <div className='h-full relative'>
      <div style={gbImageStyle}>

      </div>
    </div>
  )
}

export default Slide
