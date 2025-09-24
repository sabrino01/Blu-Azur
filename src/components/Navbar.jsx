import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId)
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Menu sidebar desktop */}
      <div className='hidden md:block absolute left-0 top-0 w-16 h-full bg-blue-500 bg-opacity-25 z-20'>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col gap-6'>
          <a href="#facebook">
            <img 
              src={assets.facebook} 
              alt="Facebook" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#instagram">
            <img 
              src={assets.instagram} 
              alt="Instagram" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#twitter">
            <img 
              src={assets.twitter} 
              alt="Twitter" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#youtube">
            <img 
              src={assets.youtube} 
              alt="Youtube" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
        </div>
      </div>

      {/* Menu sidebar mobile */}
      <div className='md:hidden absolute top-0 left-0 w-full h-12 bg-blue-500 bg-opacity-25 z-20'>
        <div className='flex justify-center items-center h-full gap-8'>
          <a href="#facebook">
            <img 
              src={assets.facebook} 
              alt="Facebook" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#instagram">
            <img 
              src={assets.instagram} 
              alt="Instagram" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#twitter">
            <img 
              src={assets.twitter} 
              alt="Twitter" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
          <a href="#youtube">
            <img 
              src={assets.youtube} 
              alt="Youtube" 
              className='w-6 h-6 filter invert cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6' 
            />
          </a>
        </div>
      </div>

      {/* Menu navbar desktop */}
      <div className='absolute top-16 md:top-0 left-0 md:left-16 w-full md:w-[calc(100%-4rem)] z-20'>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[84%] md:w-[90%] lg:w-[90%] h-px bg-white bg-opacity-30'></div>
        
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-4 md:py-6 px-4 md:px-8 lg:px-16 bg-transparent relative'>
          <img src={assets.logo} alt="Logo" className='w-20 md:w-24'/>
          
          <ul className='hidden md:flex gap-6 lg:gap-8 text-white font-semibold text-base lg:text-lg items-center relative'>
            <a 
              href="#apropos" 
              onClick={() => handleMenuClick('apropos')}
              className={`cursor-pointer hover:text-gray-400 flex items-center relative transition-all duration-300 ${
                activeMenu === 'apropos' ? 'text-white' : ''
              }`}
            >
              À propos
              {activeMenu === 'apropos' && (
                <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-white'></div>
              )}
            </a>
            
            <a 
              href="#localisation" 
              onClick={() => handleMenuClick('localisation')}
              className={`cursor-pointer hover:text-gray-400 flex items-center relative transition-all duration-300 ${
                activeMenu === 'localisation' ? 'text-white' : ''
              }`}
            >
              Localisation
              {activeMenu === 'localisation' && (
                <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-white'></div>
              )}
            </a>
            
            <a 
              href="#activites" 
              onClick={() => handleMenuClick('activites')}
              className={`cursor-pointer hover:text-gray-400 flex items-center relative transition-all duration-300 ${
                activeMenu === 'activites' ? 'text-white' : ''
              }`}
            >
              Activités
              {activeMenu === 'activites' && (
                <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-white'></div>
              )}
            </a>
            
            <a 
              href="#reserve" 
              onClick={() => handleMenuClick('reserve')}
              className={`bg-blue-500 px-6 lg:px-8 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center relative ${
                activeMenu === 'reserve' ? 'text-white' : ''
              }`}
            >
              Réservé
              {activeMenu === 'reserve'}
            </a>

            <img src={assets.menu} alt="Menu" className='w-8 h-8 filter invert'/>
          </ul>

          <img 
            src={assets.menu} 
            alt="Menu" 
            className='w-8 h-8 md:hidden filter invert cursor-pointer'
            onClick={toggleMobileMenu}
          />
          </div>
        </div>

        {/* Menu navbar mobile */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-30'>
            <ul className='flex flex-col text-white font-semibold text-lg'>
              <a 
                href="#apropos" 
                onClick={() => handleMenuClick('apropos')}
                className={`cursor-pointer hover:bg-white hover:bg-opacity-10 px-4 py-4 border-b border-gray-600 transition-all duration-300 ${
                  activeMenu === 'apropos' ? 'bg-blue-500 bg-opacity-20' : ''
                }`}
              >
                À propos
              </a>
              
              <a 
                href="#localisation" 
                onClick={() => handleMenuClick('localisation')}
                className={`cursor-pointer hover:bg-white hover:bg-opacity-10 px-4 py-4 border-b border-gray-600 transition-all duration-300 ${
                  activeMenu === 'localisation' ? 'bg-blue-500 bg-opacity-20' : ''
                }`}
              >
                Localisation
              </a>
              
              <a 
                href="#activites" 
                onClick={() => handleMenuClick('activites')}
                className={`cursor-pointer hover:bg-white hover:bg-opacity-10 px-4 py-4 border-b border-gray-600 transition-all duration-300 ${
                  activeMenu === 'activites' ? 'bg-blue-500 bg-opacity-20' : ''
                }`}
              >
                Activités
              </a>
              
              <a 
                href="#reserve" 
                onClick={() => handleMenuClick('reserve')}
                className={`cursor-pointer hover:bg-white hover:bg-opacity-10 px-4 py-4 transition-all duration-300 ${
                  activeMenu === 'reserve' ? 'bg-blue-500 bg-opacity-20' : ''
                }`}
              >
                Réservé
              </a>
            </ul>
          </div>
        )}
        </div>
    </>
  )
}

export default Navbar