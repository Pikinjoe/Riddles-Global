import {useState} from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div className='bg-white my-28 flex flex-col gap-[110px] lg:flex-row lg:mx-auto lg:w-11/12 lg:max-w-[1050px] lg:gap-6 xl:min-w-[1200px]'>
      {services.map(service => (
      <div className='w-11/12 sm:w-10/12 md:max-w-[700px] mx-auto relative lg:w-1/3 lg:h-64'>
        <img src={service.image} className='w-full h-[360px] md:h-[400px] lg:h-full'/>
       <a href={service.link}>
       <div className='bg-black h-28 absolute -bottom-20 left-8 right-8 flex justify-between items-center px-5'>
          <h3 className='text-yellow-500 text-lg font-semibold tracking-wider'>{service.title1} <br /> {service.title2}</h3>
        <img src={service.icon} alt="" />
        </div>
       </a>
      </div>
      ))}
    </div>
  )
}

export default Services
