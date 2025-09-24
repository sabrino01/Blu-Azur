import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Activites = () => {
    const [imageOrder, setImageOrder] = useState([
        'img_flex1_section1',
        'img_flex2_section1'
    ]);

    const handleImageSwap = () => {
        setImageOrder(prev => {
            // Échanger les deux images
            return [prev[1], prev[0]];
        });
    };

    return (
        <section
            className="container mx-auto px-6 py-12 md:px-20 lg:px-32 w-full overflow-hidden"
            id="activites"
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 w-full">
                {/* Gauche : Description */}
                <div className="w-full md:w-1/2 flex flex-col items-start animate-fade-in-up duration-700">
                    <h2 className="text-3xl md:text-[35px] font-semibold text-black inline-block animate-fade-in-up animation-delay-300">
                        Le confort et la sérénité d'un
                    </h2>
                    <h1 className="text-3xl md:text-[35px] font-semibold text-black animate-fade-in-up">
                        <strong>appartement privé</strong>
                    </h1>
                    <p
                        className="text-xs md:text-xs text-black leading-relaxed drop-shadow-md animate-fade-in-up animation-delay-600 mb-8 pt-4"
                        style={{ maxWidth: 'fit-content', width: 'min(100%, 400px)' }}
                    >
                        Blu Azur vous propose des appartemets élégants et spacieux, conçus pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et moderne, ils sont parfaits pour une escapade détente ou un séjour prolongé.
                    </p>
                    <h4 className="text-sm md:text-sm text-black">Les inclusions :</h4>
                    <ul className="list-disc pl-5 text-black text-xs md:text-sm animate-fade-in-up animation-delay-700 marker:text-blue-500 marker:text-xl">
                        <li>Stationnement privé</li>
                        <li>Piscine extérieure avec chaises longues</li>
                        <li>Linge de lit et serviettes</li>
                        <li>Télévision, téléphone et Wi-Fi (accès au salon)</li>
                        <li>Réfrigérateur, cuisinière, lave-vaisselle, vaisselle</li>
                        <li>Kit bébé: comprend un lit parapluie avec un vrai matelas et une chaise haute</li>
                        <li>Autres commodités en prêt à la réception: jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.</li>
                    </ul>
                </div>

                {/* Droite : les 2 images */}
                <div className="w-full md:w-1/2 relative h-full flex items-center">
                    {/* Container des images */}
                    <div className="relative flex items-center justify-end overflow-hidden">
                        <div className="flex gap-2 md:gap-4 transition-all duration-500 ease-in-out relative ml-auto items-center">
                            {/* Image 1 */}
                            <img
                                src={assets[imageOrder[0]]}
                                alt="Appartement 1"
                                className="rounded-xl shadow-lg w-[180px] md:w-[280px] lg:w-[300px] h-[320px] md:h-[450px] object-cover transition-all duration-500 hover:scale-105 animate-fade-in-right animation-delay-500"
                            />
                            
                            {/* Image 2 */}
                            <div className="relative">
                                <img
                                    src={assets[imageOrder[1]]}
                                    alt="Appartement 2"
                                    className="rounded-xl shadow-lg w-[180px] md:w-[220px] lg:w-[260px] h-[280px] md:h-[320px] object-cover transition-all duration-500 hover:scale-105 animate-fade-in-right animation-delay-700"
                                    style={{ 
                                        clipPath: 'inset(0 40% 0 0)',
                                    }}
                                />
                                
                                {/* Bouton flèche */}
                                <button
                                    onClick={handleImageSwap}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
                                    aria-label="Échanger les images"
                                >
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300"
                                    >
                                        <path 
                                            d="M9 18L15 12L9 6" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activites