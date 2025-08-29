import React, { useState } from "react";
import { Link } from "react-scroll"; // for smooth scrolling
import { motion } from "framer-motion"; // for hover/tap animations

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Experience", "Projects"];

    return (
        <div className="mb-10 w-full">
            <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow-lg max-w-6xl rounded-2xl mx-auto w-full bg-white sticky top-3 z-50">
                {/* Logo */}
                <a className="hover:text-indigo-600" href="#">
                    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                        Prathik{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Folio
                        </span>
                    </h1>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-800 text-sm">
                    {navItems.map((item) => (
                        <motion.div
                            key={item}
                            whileHover={{ scale: 1.1, color: "#6366F1" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to={item.toLowerCase()} // link to section id
                                smooth={true}           // enable smooth scroll
                                duration={700}          // scroll duration in ms
                                offset={-80}            // adjust for sticky header
                                className="relative group cursor-pointer"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Get Connected button */}
                <div className="hidden md:flex items-center">
                    <a
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                        href="#footer"
                    >
                        Get connected
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 bg-white shadow-lg rounded-2xl mt-2 py-6 text-gray-800 font-semibold">
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={700}
                            offset={-80}
                            className="relative group cursor-pointer text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 
                        "
                        href="#footer"
                        onClick={() => setIsOpen(false)}
                        
                    >
                        Get connected
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
