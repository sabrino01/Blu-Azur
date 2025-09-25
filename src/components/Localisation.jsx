import React from 'react'
import { assets } from '../assets/assets'

const Localisation = () => {
  return (
    <div 
      className="w-full overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${assets.background_section3})` }}
      id="localisation">

      <div className="absolute inset-0 bg-white bg-opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4 py-20 lg:px-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[70vh]">
          {/* Container de gauche - Textes et description */}
          <div className="flex-1 flex flex-col justify-center items-start lg:items-start text-center lg:text-left space-y-6 animate-fade-in-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-[35px] font-semibold text-black inline-block animate-fade-in-up animation-delay-300">
                Où se trouve Blu Azur à
              </h2>
              <h1 className="text-3xl md:text-[35px] font-semibold text-black animate-fade-in-up">
                <strong>Saint-Raphaël ?</strong>
              </h1>
            </div>
            <p className="text-xs md:text-xs text-black leading-relaxed animate-fade-in-up animation-delay-600 max-w-md lg:max-w-lg backdrop-blur-sm">
              Blu Azur est idéalement situé entre Saint-Tropez et Cannes, au cœur de l'une des plus belles stations balnéaires de France. Nos appartements se trouvent dans un domaine privé sécurisé, entouré de verdure, à quelques minutes à pied de la plage sablonneuse de Santa Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la résidence permet un accès facile aux boutiques, restaurants et animations locales. Une station d'arrêt d'autobus est située à la sortie du site, facilitant les déplacements, et une boulangerie à proximité vous offre du pain frais chaque matin pour bien commencer la journée.
            </p>
            <button
              className="mx-auto md:mx-auto lg:mx-0 mt-2 px-8 py-2 border-2 border-blue-500 bg-transparent text-blue-500 font-semibold rounded-full flex items-center gap-6 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 group"
            >
              Comment s'y rendre ?
              <span className="flex items-center justify-center rounded-full border-2 border-blue-500 p-1 bg-transparent transition-all duration-300 group-hover:border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
          {/* Container de droite - Images */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right animation-delay-400">
            <div className="relative w-full max-w-sm">
              {/* Image de la carte */}
              <img 
                src={assets.img_map_section3} 
                alt="map" 
                className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* Icône de la carte en haut à gauche */}
              <div className="absolute top-0 left-0 animate-pulse">
                <img 
                  src={assets.icon_map_section3} 
                  alt="Icon map" 
                  className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg hover:scale-110 transition-transform duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

export default Localisation