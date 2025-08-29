import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800" id='footer'>
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                {/* Logo / Name */}
                <div className="flex items-center space-x-3 mb-6">
                    <a href="#" className="hover:text-indigo-600">
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                            Prathik{" "}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Folio
                            </span>
                        </h1>
                    </a>
                </div>

                {/* Text + Social Icons */}
                <div className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    <p>Connect with me on:</p>

                    <div className="flex gap-4 justify-center items-center my-2">
                        <a
                            href="https://www.linkedin.com/in/prathik-l/"
                            className="text-indigo-600 hover:animate-bounce"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiLinkedin className="text-2xl" />
                        </a>

                        <a
                            href="https://github.com/prathik-l"
                            className="text-indigo-600 hover:animate-bounce"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub className="text-2xl" />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=prathik.lathish3@gmail.com"
                            className="text-indigo-600 hover:animate-bounce"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiMail className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://www.linkedin.com/in/rampavithran-rp/">Nexora</a> ©2025. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
