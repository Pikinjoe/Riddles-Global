import React from 'react'
import aboutimage from '../assets/Images/about-img.png'

const AboutUs = () => {
  return (
    <div className='max-w-[550px] w-11/12 mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 lg:max-w-[1050px] lg:gap-16 xl:min-w-[1200px]'>
      <div className='pb-10'>
        <img src={aboutimage} alt="" />
      </div>
      <div className='py-8 lg:py-0'>
        <h2 className='text-3xl capitalize font-semibold text-yellow-900 lg:text-5xl pb-7'>who we are</h2>
        <p className='text-xl font-medium text-gray-600 xl:leading-relaxed pb-5 xl:pb-10'>RGS is a group of Engineering and Management conglomerate. Headquarters in Nigeria and branch offices in Cote d'Ivoire, Guinea Conakry, Burkina Faso, Benin Republic, Togo and South Africa. <br /><br />
        We at RGS, aim to add value to the businesses of our clients and partners by building capacity, capability and competence. Through our unique project execution and implementation strategy, we focus on value addition for national development and socio-economic transformation.</p>
        <a href="#" className='capitalize bg-black text-yellow-500 w-40 h-16 flex justify-center items-center rounded-lg text-xl hover:text-black hover:bg-yellow-500 hover:font-medium ease-linear duration-200'>about us</a>
      </div>
    </div>
  )
}

export default AboutUs
