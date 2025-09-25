import React from 'react'
import { assets } from '../assets/assets'

const Activites2 = () => {
  return (
    <div 
      className="flex flex-col items-center w-full overflow-hidden min-h-screen relative p-14 md:px-20 lg:px-32"
      id="activites"
      style={{
        backgroundImage: `url(${assets.background_section2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Section 1: Textes d'introduction */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl md:text-[35px] font-semibold text-white mb-2 animate-fade-in-up animation-delay-300">
          Saint Raphaël, l'endroit parfait pour
        </h2>
        <h1 className="text-3xl md:text-[35px] font-semibold text-white mb-6 animate-fade-in-up animation-delay-500">
          <strong>vivre la Côte d'Azur</strong>
        </h1>
        <p className="text-xs md:text-xs text-white leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-700 max-w-xl mx-auto">
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques sauvages, Saint-Raphaël est une destination de rêve. Entre mer turquoise et rochers rouges de l'Estérel, elle offre un cadre idyllique pour la détente et l'aventure.
        </p>
      </div>

      {/* Section 2: Images avec descriptions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
        <div className="flex flex-col items-center animate-fade-in-up animation-delay-900">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon1_section2} alt="Nage" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Sports,</p>
          <p className="text-xs text-white text-center opacity-90">nautiques, plongée, voile</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-1100">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon2_section2} alt="Rodéo" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Randonnées et</p>
          <p className="text-xs text-white text-center opacity-90">vélo dans l'Estérel</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-1300">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon3_section2} alt="Casino" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Casino et</p>
          <p className="text-xs text-white text-center opacity-90">vie nocturne animée</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-1500">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon4_section2} alt="Village" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Villages perchés</p>
          <p className="text-xs text-white text-center opacity-90">et marchés provençaux</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-1700">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon5_section2} alt="Golf" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Un paradis</p>
          <p className="text-xs text-white text-center opacity-90">pour les golfeurs</p>
        </div>

        <div className="flex flex-col items-center animate-fade-in-up animation-delay-1900">
          <div className="bg-white rounded-full p-4 shadow-lg mb-4 w-20 h-20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl cursor-pointer">
            <img src={assets.img_icon6_section2} alt="Montagne" className="w-12 h-12 object-contain" />
          </div>
          <p className="text-xs text-white text-center font-medium">Montagne</p>
          <p className="text-xs text-white text-center opacity-90">et vélo de route</p>
        </div>
      </div>

      {/* Section 3: Paragraphe final */}
      <div className="text-center animate-fade-in-up animation-delay-2100">
        <p className="text-xs md:text-xs text-white leading-relaxed drop-shadow-md max-w-xl mx-auto">
          Flânez sur la Promenade des Bains, explorez les criques secrètes ou partez en mer depuis son port de plaisance. Saint-Raphaël, c'est la Côte d'Azur dans toute sa splendeur.
        </p>
      </div>
    </div>
  )
}

export default Activites2