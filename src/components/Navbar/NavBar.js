import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import { FaSun, FaMoon } from 'react-icons/fa'; // Pour les icônes du mode sombre et clair

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // État pour suivre le mode sombre

    function handleClick() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    // Fonction pour basculer entre mode sombre et clair
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark');  // Ajoute la classe dark au body
        } else {
            document.body.classList.remove('dark');  // Retire la classe dark du body
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'} ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className="flex justify-between items-center px-6 py-2 mx-auto max-w-screen-xl">
                {/* Logo ou titre */}
                <div className="flex justify-center items-center">
                    <HashLink smooth to="/#hero">
                        <span className="text-2xl font-bold text-blue-900">Logo</span> {/* Utilisez un logo ou du texte */}
                    </HashLink>
                </div>
                
                {/* Menu burger pour mobile */}
                <div className="group flex items-center relative">
                    <button className="p-2 rounded-lg lg:hidden text-blue-900" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            ) : (
                                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>

                    {/* Menu de navigation */}
                    <div className="hidden lg:flex space-x-6 p-5">
                        <NavLinks />
                    </div>

                    {/* Menu mobile */}
                    <div className={`fixed top-14 left-0 w-full bg-white shadow-xl rounded-md p-6 transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}>
                        <NavLinks />
                    </div>
                </div>

                {/* Bouton de mode sombre */}
                <button 
                    onClick={toggleDarkMode} 
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition duration-200 ease-in-out"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
