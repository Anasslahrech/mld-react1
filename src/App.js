import React, { useEffect } from 'react';

import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Services from './components/Services';  // Importer le fichier Services.js
import Examples from './components/Examples';  // Importer le fichier Examples.js


import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
    useEffect(() => {
        const aos_init = () => {
            AOS.init({
                once: true,
                duration: 1000,
                easing: 'ease-out-cubic',
            });
        }

        window.addEventListener('load', () => {
            aos_init();
        });
    }, []);

    useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications");

    return (
        <>
            <Router>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/get-demo" element={<DemoProduct />} />
                        <Route path="/services" element={<Services />} /> {/* Page Services */}
                        <Route path="/examples/:serviceName" element={<Examples />} /> {/* Page Exemples pour chaque service */}
                    </Routes>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
