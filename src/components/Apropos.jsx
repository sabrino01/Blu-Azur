import React from 'react'
import { assets } from '../assets/assets'

const Apropos = () => {
  return (
    <div 
      className='relative w-full overflow-hidden bg-cover bg-center bg-no-repeat' 
      id='apropos'
      style={{
        backgroundImage: `url(${assets.background_section4})`
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Contenu principal */}
      <div className='relative z-10 container mx-auto px-6 py-12 md:px-20 lg:px-32 flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full'>
          
          {/* Section image à gauche */}
          <div className='flex justify-center lg:justify-start order-2 lg:order-1'>
            <div className='relative overflow-hidden rounded-lg shadow-2xl group'>
              <img 
                src={assets.img_section4} 
                alt="Découvrir Côte d'Azur" 
                className='w-full max-w-sm lg:max-w-sm h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 animate-fade-in-up animation-delay-200'
              />
              {/* Survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Section texte à droite */}
          <div className='text-right lg:text-right order-1 lg:order-2 space-y-4'>
            <div className='space-y-2'>
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white mb-2 animate-fade-in-up animation-delay-300">
                Un point de départ idéal
              </h2>
              <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white mb-6 animate-fade-in-up animation-delay-500">
                pour <strong>découvrir la Côte d'Azur !</strong>
              </h1>
            </div>
            
            <div className='max-w-md ml-auto'>
              <p className="text-sm md:text-sm text-white leading-relaxed animate-fade-in-up animation-delay-700 text-justify lg:text-sm backdrop-blur-sm">
                Entre mer et montagne, Saint-Raphaël est une destination idéale pour les amateurs de plein air et de découvertes. Randonnées dans le Massif de l'Estérel, sports nautiques sur les eaux cristallines de la Méditerranée, balades en bateau vers les îles de Lérins ou encore golf et cyclisme sur des parcours panoramiques, chaque journée offre son lot d'aventures. Entre marchés provençaux, villages perchés et animations locales, l'art de vivre azuréen se dévoile à chaque instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Apropos