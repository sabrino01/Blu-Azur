import React from 'react'
import { assets } from '../assets/assets'

const Activities3 = () => {
  return (
    <div 
      className='relative w-full py-16 overflow-hidden bg-cover bg-center bg-no-repeat' 
      id='activites'
      style={{
        backgroundImage: `url(${assets.background_section5})`
      }}
    >
      {/* Première rangée - 2 cartes côte à côte */}
      <div className="flex flex-col md:flex-row container mx-auto lg:px-32 md:px-20 px-6 gap-2 mb-2">
        {/* Première carte */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div 
            className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.card1_section5})`
            }}
          >
            {/* Overlay gradient pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Texte en bas de la carte */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-xl md:text-xl font-bold transition-all duration-300 group-hover:text-yellow-300">
              Un patrimoine culturel d'exception
            </h3>
            <h3 className="text-xl md:text-xl font-bold mb-2 transition-all duration-300 group-hover:text-yellow-300">
              d'exception
            </h3>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
             De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.
            </p>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
             A voir: <a href="http://festival-de-canne" className='text-blue-700 underline'>Le Festival de Cannes. Carnaval de Nice. Fête du Citron</a>
            </p>
          </div>
        </div>

        {/* Deuxième carte */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div 
            className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.card2_section5})`
            }}
          >
            {/* Overlay gradient pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Texte en bas de la carte */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-xl md:text-xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-300">
              Le sport au rythme de la Méditerranée
            </h3>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.
            </p>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
             A voir: <a href="http://festival-de-canne" className='text-blue-700 underline'>Grand prix de Monaco, Ironman France - Nice , Marathon des Alpes-Maritimes, Régates de Saint-Trapez</a>
            </p>
          </div>
        </div>
      </div>

      {/* Deuxième rangée - 3 cartes côte à côte */}
      <div className="flex flex-col md:flex-row container mx-auto lg:px-32 md:px-20 px-6 gap-2">
        {/* Troisième carte */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div 
            className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.card3_section5})`
            }}
          >
            {/* Overlay gradient pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Texte en bas de la carte */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:px-2 lg:px-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg md:text-md lg:text-xl font-bold transition-all duration-300 group-hover:text-green-300">
              Une destination gourmande
            </h3>
            <h3 className="text-lg md:text-md lg:text-xl font-bold mb-1 transition-all duration-300 group-hover:text-green-300">
              et authentique
            </h3>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurants raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.
            </p>
            <button
              className="lg:mx-0 px-2 py-0.5 border-2 mb-2 border-blue-500 bg-transparent text-blue-500 text-xs font-semibold rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 group min-h-[32px]"
            >
              Consulter la liste des meilleurs restaurants
              <span className="flex items-center justify-center rounded-full border-2 border-blue-500 p-0.5 bg-transparent transition-all duration-300 group-hover:border-white min-w-[22px] min-h-[22px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-3 h-3 text-blue-500 group-hover:text-white transition-colors duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Quatrième carte */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div 
            className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.card4_section5})`
            }}
          >
            {/* Overlay gradient pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Texte en bas de la carte */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:px-2 lg:px-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg md:text-md lg:text-xl font-bold transition-all duration-300 group-hover:text-purple-300">
              Des expériences inoubliables
            </h3>
            <h3 className="text-lg md:text-md lg:text-xl font-bold mb-1 transition-all duration-300 group-hover:text-purple-300">
              en famille
            </h3>
            <p className="text-xs md:text-xs lg:text-xs opacity-90 mb-4 transition-opacity duration-300 group-hover:opacity-100">
              Entre villages pittoresques, marchés publics animés et escapades sur la route du littoral, Saint-Raphaël propose un cadre idéal pour partager des moments inoubliables. La diversité des activités en plein air fait de la région une destination prisée par les amateurs de découvertes et d’aventures en famille.
            </p>
          </div>
        </div>

        {/* Cinquième carte */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div 
            className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${assets.card5_section5})`
            }}
          >
            {/* Overlay gradient pour meilleure lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Texte en bas de la carte */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:px-2 lg:px-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
            <h3 className="text-lg md:text-md lg:text-xl font-bold mb-1 transition-all duration-300 group-hover:text-orange-300">
              L'évasion en pleine nature
            </h3>
            <p className="text-xs md:text-xs opacity-90 mb-2 transition-opacity duration-300 group-hover:opacity-100">
              Le Massif de l’Estérel déploie ses roches rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.
            </p>
            <button
              className="lg:mx-0 px-2 py-0.5 border-2 mb-2 border-blue-500 bg-transparent text-blue-500 text-xs font-semibold rounded-full flex items-center gap-1 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 group min-h-[32px]"
            >
              Consulter la liste des sentiers pédestres
              <span className="flex items-center justify-center rounded-full border-2 border-blue-500 p-0.5 bg-transparent transition-all duration-300 group-hover:border-white min-w-[22px] min-h-[22px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-3 h-3 text-blue-500 group-hover:text-white transition-colors duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities3