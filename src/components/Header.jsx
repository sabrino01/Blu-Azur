import React, { useState } from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [assets['img_flex_header1'], assets['img_flex_header2']]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      className='relative min-h-screen mb-4 bg-cover bg-center flex flex-col w-full overflow-hidden'
      style={{ backgroundImage: "url('/background-header.png')" }}
      id='Header'
    >
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none'></div>
      <Navbar />
      
      <div className='container mx-auto my-auto'>
      {/* Contenu après navbar */}
      <div className='flex-1 pl-6 md:pl-8 lg:pl-24 justify-center pt-20 md:pt-24 relative z-10 mt-20 mb-10'>
        <div className='text-start max-w-4xl mb-30'>
          <h1 className='text-3xl md:text-[35px] font-semibold text-white drop-shadow-lg animate-fade-in-up'>
            <strong>Votre évasion</strong>
          </h1>
          
          <h2 className='text-3xl md:text-[35px] font-semibold text-white mb-3 drop-shadow-lg inline-block animate-fade-in-up animation-delay-300'>
            sur la Côte d'Azur !
          </h2>
          
          <p className='text-sm md:text-sm text-white leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-600 mb-8' style={{ maxWidth: 'fit-content', width: 'min(100%, 400px)' }}>
            Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une destination d'exception nichée entre Cannes et Saint-Tropez. Nos appartements tout équipés, situés dans un domaine privé sécurisé, offrent un cadre verdoyant et paisible, à quelques pas de la marina de Santa Lucia, des plages de sable fin et du centre-ville animé. Profitez d'un séjour alliant confort, sérénité et élégance au cœur de la Riviera française !
          </p>
        </div>

        {/* Footer containers améliorés */}
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-8'>
          {/* Container gauche - Bouton avec animation */}
          <div className='flex-shrink-0'>
            <button
              className='group border-2 border-white bg-transparent text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
              aria-label='Réservez dès maintenant votre séjour !'
            >
              <span className='font-semibold truncate'>Réservez dès maintenant votre séjour !</span>
              <div className='w-6 h-6 rounded-full border border-white flex items-center justify-center transition-all duration-300 group-hover:border-black group-hover:rotate-45'>
                <svg className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </div>
            </button>
          </div>

          {/* Container droite - Carrousel d'images */}
          <div className='relative flex items-center justify-center md:justify-end gap-4'>
            {/* Images container */}
            <div className='flex items-center gap-2'>
              {/* Image principale (visible) */}
              <div className='relative w-48 h-24 md:w-[90%] md:h-40 rounded-lg overflow-hidden transition-all duration-500 mb-4 md:mb-4'>
                <img 
                  src={images[currentImage]} 
                  alt={`Header image ${currentImage + 1}`} 
                  className='w-full h-full object-cover shadow-lg'
                  loading='lazy'
                />
              </div>
              {/* Image secondaire */}
              <div className='relative w-48 h-24 md:w-[48%] md:h-32 rounded-lg overflow-hidden opacity-70 transition-all duration-500 md:overflow-visible mb-4 md:mb-4'>
                <img 
                  src={images[(currentImage + 1) % images.length]} 
                  alt={`Header image ${((currentImage + 1) % images.length) + 1}`} 
                  className='w-full h-full md:w-[200%] object-cover object-left shadow-md'
                  loading='lazy'
                />
                {/* Bouton navigation visible uniquement en desktop */}
                <button 
                  onClick={nextImage}
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white border-opacity-30 transition-all duration-300 hover:bg-opacity-40 hover:scale-110 z-20 hidden md:flex focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                  aria-label='Image suivante'
                >
                  <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Styles CSS pour les animations du texte après navbar */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

export default Header