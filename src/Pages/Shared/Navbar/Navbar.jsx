import  { useState } from 'react';
import img from '../../../assets/img.png'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative  shadow   rounded-3xl">
            <div className="container px-6 py-1 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to={'/'}>
                            <img className="lg:h-20 md:h-16 h-12 w-auto rounded-full" src={img} alt="" />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent bg-slate-200  text-[#17ACAC] lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <NavLink to={'/'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 \ hover:bg-gray-100 dark:hover:bg-gray-700">Home</NavLink>
                            <NavLink to={'/'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 \ hover:bg-gray-100 dark:hover:bg-gray-700">
                            All Trainer
                            </NavLink>
                            <NavLink to={'/'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 \ hover:bg-gray-100 dark:hover:bg-gray-700">
                            All Classes
                            </NavLink>
                            <NavLink to={'/'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 \ hover:bg-gray-100 dark:hover:bg-gray-700">
                            Dashboard
                            </NavLink>
                            <NavLink to={'/'} className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 \ hover:bg-gray-100 dark:hover:bg-gray-700">
                            Community
                            </NavLink>
                           
                            
                            
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                           
                           
                            {/* <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                                </div>

                                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
