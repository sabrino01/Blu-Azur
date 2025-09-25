import React from 'react'
import { assets } from '../assets/assets'

const Reserve = () => {
  return (
    <div 
      className='min-h-screen flex flex-col justify-center items-center px-6 py-12 md:px-20 lg:px-32 relative bg-cover bg-center bg-no-repeat animate-fade-in' 
      id='reserve'
      style={{ backgroundImage: `url(${assets.background_section6})` }}
    >
        
  {/* Overlay gradient bleu gauche vers transparent droite */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-700/30 to-transparent"></div>
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 animate-slide-down">
          Réservations
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed animate-slide-up p-6">
          <strong>Offrez-vous un séjour inoubliable</strong> dans l'un de nos appartements Blu Azur. Profitez d'un cadre exceptionnel, entre confort, détente et découvertes, au cœur de Saint-Raphaël.
        </p>
        
        <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto group animate-bounce-subtle">
          <span>Réservez dès maintenant votre séjour !</span>
          <div className="w-8 h-8 rounded-full border-2 border-white border-opacity-30 flex items-center justify-center group-hover:border-opacity-50 transition-all duration-300">
            <svg 
              className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
      
      {/* Styles d'animation */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-down {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes bounce-subtle {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  )
}

export default Reserve