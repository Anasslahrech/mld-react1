import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Slider from 'react-slick'; // Import the Slider component

// Example service data
const serviceExamples = {
    "Community Management": [
        { img: '/images/community_manager/image1.jpeg', description: "Gestion des réseaux sociaux pour une startup technologique." },
        { img: '/images/community_manager/image3.jpeg', description: "Organisation d'une campagne de branding pour une marque de vêtements." },
        { img: '/images/community_manager/image7.jpeg', description: "Création d'un contenu engageant pour une entreprise de services." },
        { img: '/images/community_manager/image5.jpeg', description: "Gestion de la communauté pour un influenceur du secteur de la mode." },
    ],
    "Création Des Logo": [
        { img: 'path/to/image5.jpg', description: "Design du logo pour une agence de voyage." },
        { img: 'path/to/image6.jpg', description: "Création d'un logo minimaliste pour un cabinet médical." },
        { img: 'path/to/image7.jpg', description: "Création d'un logo pour une marque de cosmétiques." },
        { img: 'path/to/image8.jpg', description: "Design d'un logo pour un restaurant bio." },
    ],
    "Design": [
        { img: 'path/to/image5.jpg', description: "Design du logo pour une agence de voyage." },
        { img: 'path/to/image6.jpg', description: "Création d'un logo minimaliste pour un cabinet médical." },
        { img: 'path/to/image7.jpg', description: "Création d'un logo pour une marque de cosmétiques." },
        { img: 'path/to/image8.jpg', description: "Design d'un logo pour un restaurant bio." },
    ],
    "Affiches Animées": [
        { img: 'path/to/image5.jpg', description: "Design du logo pour une agence de voyage." },
        { img: 'path/to/image6.jpg', description: "Création d'un logo minimaliste pour un cabinet médical." },
        { img: 'path/to/image7.jpg', description: "Création d'un logo pour une marque de cosmétiques." },
        { img: 'path/to/image8.jpg', description: "Design d'un logo pour un restaurant bio." },
    ],
};

const Examples = () => {
    const { serviceName } = useParams();

    // Get examples for the selected service
    const examples = serviceExamples[serviceName] || [{ img: '', description: 'Aucun exemple disponible pour ce service.' }];

    // Slider settings
    const sliderSettings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 800, // Transition speed
        fade: true, // Use fade transition between slides
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3500, // Interval between slides
        cssEase: 'ease', // Smooth transition effect
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 py-12">
            <NavBar className="bg-white" />
            <div className="mt-16">
                <h2 className="text-center text-4xl font-bold text-blue-900">{serviceName}</h2>
                <div className="mt-16 mx-auto max-w-5xl">
                    {/* Slider Component */}
                    <Slider {...sliderSettings}>
                        {examples.map((example, index) => (
                            <div key={index} className="relative bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 group rounded-lg shadow-lg">
                                <div className="m-2 text-center">
                                    <img
                                        alt={`Example ${index}`}
                                        className="w-full h-96 object-cover rounded-lg group-hover:scale-105 transition-all duration-700"
                                        src={example.img}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition-all duration-700"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold group-hover:opacity-100 opacity-0 transition-all duration-500">
                                        <h3>{serviceName}</h3>
                                    </div>
                                    <div className="mt-4 px-4 py-2">
                                        <p className="text-lg font-medium">{example.description}</p>
                                        <Link to={`/examples/${serviceName}`} className="mt-4 text-blue-500 hover:underline">Voir plus</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <footer className="mt-16"> {/* Footer Content */} </footer>
        </div>
    );
};

export default Examples;
