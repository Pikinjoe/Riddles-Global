import { useState, useEffect} from 'react'
import { imageSlides } from '../constants'
import arrowRight from '../assets/Icons/arrowright.svg'
import arrowleft from '../assets/Icons/arrowleft.svg'


const Hero = () => {
  const [currentState, setCurrentState] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prevState) => 
        (prevState === imageSlides.length - 1 ?
         0 : prevState + 1));

    }, 5000);
    return () => clearTimeout(timer)
  },[currentState])

  // Background image functions
  const prevSlide = () => {
    const isFirstSlide = currentState === 0;
    const newState = isFirstSlide ? 
                      imageSlides.length - 1:
                      currentState - 1;
      setCurrentState(newState)
  }

  const nextSlide = () => {
    const isLastSlide = currentState === imageSlides.length - 1;
    const newState = isLastSlide ? 0 : currentState + 1;
    setCurrentState(newState)
  }

  return (
    <section id='home'
    className='w-full h-screen overflow-hidden relative'>
      
      <img key={currentState} src={imageSlides[currentState].image} alt="" className='object-cover w-full h-screen animate-zoom'/>
      <div className='absolute h-screen top-0 flex flex-col justify-center mx-4 lg:mx-32 z-10'>
        <h1 className='capitalize font-extrabold text-4xl text-cyan-100 lg:text-6xl'>{imageSlides[currentState].title}</h1>
        <p className='capitalize font-medium text-cyan-100 text-xl py-5'>{imageSlides[currentState].body}</p>
        <a href={imageSlides[currentState].link} target='_blank' className='capitalize bg-black text-yellow-500 w-40 h-16 flex justify-center items-center rounded-lg text-xl hover:text-black hover:bg-yellow-500 hover:font-medium ease-linear duration-200'>learn more</a>
      </div>

      {/* Background arrow button control */}
        <div className='absolute bottom-60 right-24 lg:right-96 flex flex-col space-y-8 z-20'>
          <div className='w-10 h-10 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-75 lg:w-16 lg:h-16 rounded-full cursor-pointer'>
          <img src={arrowRight} alt="right arrow logo" width={20} onClick={nextSlide}/>
          </div>
          <div className='w-10 h-10 flex justify-center items-center bg-black bg-opacity-40 hover:bg-opacity-75 lg:w-16 lg:h-16 rounded-full cursor-pointer'>
          <img src={arrowleft} alt="left arrow logo" width={20} onClick={prevSlide}/>
          </div>
        </div>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-hidden'></div>
    </section>
  )
}

export default Hero
