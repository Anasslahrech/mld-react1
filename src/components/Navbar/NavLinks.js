import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    // Etats pour gérer les survols des boutons "Nos Services" et "Nos réalisations"
    const [isHoveredServices, setIsHoveredServices] = useState(false);
    const [isHoveredRealisations, setIsHoveredRealisations] = useState(false);

    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                Accueil
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                Qui sommes-nous
            </HashLink>

            {/* Nos Services link avec gestion de survol */}
            <div
                className="relative"
                onMouseEnter={() => setIsHoveredServices(true)}
                onMouseLeave={() => setIsHoveredServices(false)}
            >
                <button className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
                    Nos Services
                </button>
                {isHoveredServices && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 w-64 opacity-100 scale-100 translate-y-0 transition-all duration-300 ease-in-out origin-top">
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#service1"
                        >
                            Création de contenu
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#service2"
                        >
                            Design 
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#service3"
                        >
                            Infographie 
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#service4"
                        >
                            Community Management 
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#service5"
                        >
                            Production audiovisuelle
                        </HashLink>
                    </div>
                )}
            </div>

            {/* Nos réalisations link avec gestion de survol */}
            <div
                className="relative"
                onMouseEnter={() => setIsHoveredRealisations(true)}
                onMouseLeave={() => setIsHoveredRealisations(false)}
            >
                <button className="px-4 font-extrabold text-gray-500 hover:text-blue-900">
                    Nos réalisations
                </button>
                {isHoveredRealisations && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-2 w-64 opacity-100 scale-100 translate-y-0 transition-all duration-300 ease-in-out origin-top">
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#realisations1"
                        >
                            Création de contenu - Nos projets en rédaction et visuels
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#realisations2"
                        >
                            Design - Réalisations graphiques uniques
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#realisations3"
                        >
                            Infographie - Illustrations et maquettes créatives
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#realisations4"
                        >
                            Community Management - Stratégies engageantes
                        </HashLink>
                        <HashLink 
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:transform hover:scale-105 transition-all duration-200 ease-in-out" 
                            smooth 
                            to="/#realisations5"
                        >
                            Production audiovisuelle - Vidéos de qualité professionnelle
                        </HashLink>
                    </div>
                )}
            </div>

            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact
            </HashLink>
            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Profitez De Nos Services
            </HashLink>
        </>
    );
}

export default NavLinks;
