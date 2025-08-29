import React from "react";
import { FiArrowDownCircle, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-28"
        >
            {/* Left Content */}
            <div className="text-center md:text-left md:w-1/2">
                {/* Intro */}
                <p className="text-indigo-600 font-semibold uppercase tracking-widest">
                    Welcome to my Portfolio
                </p>

                {/* Name */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-3">
                    Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Prathik</span> 👋
                </h1>

                {/* Typed Text */}
                <h2 className="mt-4 text-2xl font-medium text-gray-700 min-h-[40px]">
                    <ReactTyped
                        strings={[
                            "💻 MERN Full-Stack Developer",
                            "🎨 UI/UX Enthusiast",
                            "🚀 Open Source Contributor",
                            "📚 Lifelong Learner",
                        ]}
                        typeSpeed={60}
                        backSpeed={40}
                        loop
                    />
                </h2>

                {/* Call-to-Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full font-medium text-white 
                        bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:opacity-90 
                        transition transform hover:scale-105"
                    >
                        🚀 View Projects
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prathik-l/"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 
                        text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition shadow-sm"
                    >
                        Get in Touch
                        <FiArrowDownCircle className="w-6 h-6 animate-bounce" />
                        
                    </a>
                </div>

                {/*  Social Media Icons */}
                <div className="mt-8 flex gap-6 justify-center md:justify-start">
                    <a
                        href="https://github.com/prathik-l"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition shadow-md"
                    >
                        <FiGithub className="text-2xl" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/prathik-l/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition shadow-md"
                    >
                        <FiLinkedin className="text-2xl" />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=prathik.lathish3@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition shadow-md"
                    >
                        <FiMail className="text-2xl" />
                    </a>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative">
                <div className="absolute -z-10 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                    src="image.jpg" // replace with your image
                    alt="Prathik"
                    className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4
                    border-white hover:scale-105 transition-transform duration-300"
                />
            </div>
        </section>
    );
};

export default Hero;
