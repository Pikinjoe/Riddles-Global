import { useState } from 'react'
import Logo from '../assets/Images/Logo.png'
import {navLinks} from '../constants'
import phone  from '../assets/Icons/phone.svg'
import menu from '../assets/Icons/menu.svg'
import close from '../assets/Icons/close.svg'
import { socialLinks } from '../constants'
import message from '../assets/Icons/message.svg'


const Nav = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav)
  }
  return (
    <header className=' py-2 border-b-2 border-b-gray-400 bg-black bg-opacity-50 absolute z-20 w-full '>
      <nav className='flex justify-between items-center w-5/6 mx-auto lg:w-11/12'>
      <a href="#">
        <img src={Logo}
         alt="Logo"
         className=''
         />
      </a>
      <ul className='hidden lg:flex space-x-4 xl:space-x-8'>
        {navLinks.map(link => (<li key={link.label} className='text-xl text-cyan-100'>
          <a href={link.href}>{link.label}</a>
        </li>))}
      </ul>
      <div className='hidden md:flex flex-col'>
        <a href="tel:+2348165069358" className='flex items-center space-x-3 text-yellow-500 text-xl font-semibold'>
           <span className='bg-black w-10 h-10 flex justify-center items-center rounded-full xl:w-16 xl:h-16'><img src={phone} alt="" className='w-5 xl:w-7'/></span> <span>+234 (816) 506-9358</span>
        </a>
        <div className='lg:flex hidden self-end space-x-2'>
          <ul className='hidden lg:flex space-x-4 xl:space-x-4'>
            {socialLinks.map(link => (<li key={link.icon} className='w-8 h-8 rounded-full bg-black flex items-center justify-center'>
              <a href={link.href}><img src={link.icon} alt="" width={18}/></a>
            </li>))}
          </ul>

        </div>
      </div>
      <div className='lg:hidden'>
        <img src={nav ? close : menu} alt="menu bar" width={20} onClick={handleNav}/>
      </div>

      <div className={nav ? 'fixed left-0 top-0 h-full bg-black bg-opacity-50 lg:hidden ease-linear duration-700' : 'fixed top-0 h-full -left-full ease-linear duration-700'}>
        <div className='bg-black w-80 h-full'>
          <img src={Logo} alt="logo"/>
          <ul className='uppercase p-4'>
            {navLinks.map(link => (<li key={link.label} className='text-md text-cyan-100 py-4 border-b border-gray-900'>
              <a href={link.href}>{link.label}</a>
            </li>))}
          </ul>

          <div className='flex flex-col ml-4 gap-5 py-10'>
            <a href="tel:+2348165069358" className='flex items-center space-x-3 text-yellow-500 text-md font-semibold'>
              <span className='bg-green-900 w-8 h-8 flex justify-center items-center rounded-full'><img src={phone} alt="" className='w-4'/></span> <span>+234 (816) 506-9358</span>
            </a>

            <a href="mailto:info@rgsl-intl.co" className='flex items-center space-x-3 text-yellow-500 text-md font-semibold'>
              <span className='bg-green-900 w-8 h-8 flex justify-center items-center rounded-full'><img src={message} alt="" className='w-4'/></span> <span>info@rgsl-intl.co</span>
            </a>
          </div>

          <div className=''>
              <ul className='flex space-x-4 ml-4'>
                {socialLinks.map(link => (<li key={link.icon} className='w-8 h-8 rounded-full bg-green-900 flex items-center justify-center'>
                  <a href={link.href}><img src={link.icon} alt="" width={18}/></a>
                </li>))}
              </ul>

            </div>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Nav
