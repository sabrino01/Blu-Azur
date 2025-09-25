import React from 'react'
import { assets } from '../assets/assets'

const Apropos2 = () => {
  return (
    <div 
      className='bg-blue-600 h-screen/2 flex items-center justify-center  animate-fade-in-up' 
      id='apropos'
    >
      <div className='container mx-auto px-6 md:px-20 lg:px-32 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Section gauche - Logo */}
          <div className='flex justify-center lg:justify-center'>
            <img 
              src={assets.logo_contact} 
              alt="Blu Azur logo" 
              className='w-[50%] transform hover:scale-105 transition-transform duration-300'
            />
          </div>
          
          {/* Section droite - Informations de contact */}
          <div className='text-white space-y-4'>
            <h2 className='text-3xl font-bold mb-8 text-center lg:text-left'>
              Contactez-nous
            </h2>
            
            {/* Email */}
            <div className='flex items-center justify-center space-x-4 hover:transform hover:translate-x-2 transition-all duration-300 md:justify-center'>
              <img 
                src={assets.email_contact} 
                alt="email" 
                className='w-6 h-6 flex-shrink-0'
              />
              <p className='text-lg'>info@bluazur.com</p>
            </div>
            
            {/* Facebook */}
            <div className='flex items-center justify-center space-x-4 hover:transform hover:translate-x-2 transition-all duration-300 md:justify-center'>
              <img 
                src={assets.facebook_contact} 
                alt="facebook" 
                className='w-6 h-6 flex-shrink-0'
              />
              <p className='text-lg'>@ BLU Azur</p>
            </div>
            
            {/* Téléphone */}
            <div className='flex items-center justify-center space-x-4 hover:transform hover:translate-x-2 transition-all duration-300 md:justify-center'>
              <img 
                src={assets.phone_contact} 
                alt="phone" 
                className='w-6 h-6 flex-shrink-0'
              />
              <p className='text-lg'>+1 555 555-5555</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Apropos2