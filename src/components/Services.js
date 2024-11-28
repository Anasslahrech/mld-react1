import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour rediriger
import img from '../images/community_manager/image2.jpeg';
import img2 from '../images/logo/logo3.jpeg';
import img3 from '../images/design/design2.jpeg';
import img4 from '../images/design/design1.jpeg';

const Services = () => {
    return (
        <div id="services" className="bg-gray-100 py-12">
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">services</h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-blue-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
                        Nous sommes profondément engagés dans la croissance et le succès de nos clients.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Service 1 */}
                        <div className="bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group relative">
                            <img alt="card img" className="w-full rounded-t group-hover:scale-[1.15] transition-all duration-500 ease-in-out" src={img} />
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-all duration-300 ease-in-out">
                                <h2 className="font-semibold text-2xl mb-4">Community Management</h2>
                                {/* <p className="text-md font-medium text-center">
                                    Créer, gérer et animer une communauté en ligne autour d’une marque, d’un produit ou d’une entreprise.
                                </p> */}
                                <Link to="/examples/Community Management">
                                    <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Voir des exemples
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group relative">
                            <img alt="card img" className="w-full rounded-t group-hover:scale-[1.15] transition-all duration-500 ease-in-out" src={img2} />
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-all duration-300 ease-in-out">
                                <h2 className="font-semibold text-2xl mb-4">Création Des Logo</h2>
                               
                                <Link to="/examples/Création Des Logo">
                                    <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Voir des exemples
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group relative">
                            <img alt="card img" className="w-full rounded-t group-hover:scale-[1.15] transition-all duration-500 ease-in-out" src={img3} />
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-all duration-300 ease-in-out">
                                <h2 className="font-semibold text-2xl mb-4">Design</h2>
                               
                                <Link to="/examples/Design">
                                    <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Voir des exemples
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white transition-all ease-in-out duration-300 overflow-hidden text-gray-700 rounded-lg shadow-2xl p-3 group relative">
                            <img alt="card img" className="w-full rounded-t group-hover:scale-[1.15] transition-all duration-500 ease-in-out" src={img4} />
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white transition-all duration-300 ease-in-out">
                                <h2 className="font-semibold text-2xl mb-4">Affiches Animées</h2>
                               
                                <Link to="/examples/Affiches Animées">
                                    <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                        Voir des exemples
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
