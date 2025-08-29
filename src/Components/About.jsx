import React from "react";
import { FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

const About = () => {
    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-20" id="about">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-12">

                {/* Left: Image */}
                <div className="lg:w-1/3 flex justify-center">
                    <img
                        src="image2.jpg"
                        alt="Profile"
                        className="rounded-2xl shadow-2xl hover:scale-105 hover:shadow-indigo-300 transition-transform duration-500"
                    />
                </div>

                {/* Right: Content */}
                <div className="lg:w-2/3 space-y-12">

                    {/* Heading */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-900">
                            About <span className="text-indigo-600">Me</span>
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                            I’m <span className="text-indigo-600 font-semibold">Prathik</span>, a passionate
                            developer with expertise in <span className="font-medium">Big Data, Machine Learning,
                                and Web Development</span>. My journey blends technology, creativity, and
                            problem-solving 🚀.
                        </p>
                    </div>

                    {/* Education */}
                    <div id="education">
                        <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 mb-4">
                            <FaGraduationCap className="text-indigo-600" /> Education & Honors
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-lg hover:shadow-indigo-200 transition">
                                <p className="font-bold text-lg">Atlantic Technological University</p>
                                <p className="text-sm">Post Graduation in Big Data Analytics (GPA: 2.0/4.0)</p>
                                <p className="text-xs text-gray-500">Donegal, IE – Jan 2025</p>
                                <p className="text-sm mt-2 text-gray-600">
                                    Relevant Coursework: MLOps, Data Science, Statistics & Big Data Analytics
                                </p>
                            </div>
                            <div className="bg-white/70 backdrop-blur-md p-5 rounded-xl shadow-lg hover:shadow-indigo-200 transition">
                                <p className="font-bold text-lg">Anna University</p>
                                <p className="text-sm">B.E. Electronics & Communication (GPA: 7.48/10)</p>
                                <p className="text-xs text-gray-500">Chennai, IN – May 2022</p>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div id="experience">
                        <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 mb-4">
                            <FaBriefcase className="text-indigo-600" /> Professional Experience
                        </h3>
                        <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-indigo-200 transition">
                            <p className="font-bold text-lg">Texas Instruments</p>
                            <p className="text-sm text-gray-500">
                                Embedded System Design & IoT Intern – Bengaluru, IN (May 2021 - June 2021)
                            </p>
                            <ul className="list-disc list-inside mt-3 space-y-2 text-sm text-gray-700">
                                <li>Visualized embedded system concepts using TI microcontroller.</li>
                                <li>Developed a Bluetooth-controlled robot car (circular & square motion).</li>
                                <li>Explored RTOS concepts & applications with TI microcontroller.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Skills */}
                    <div id="skills">
                        <h3 className="flex items-center gap-2 text-2xl font-semibold text-gray-800 mb-4">
                            <FaTools className="text-indigo-600" /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Python", "R", "Java", "C / C++", "JavaScript", "HTML & CSS",
                                "Hadoop", "Spark", "MongoDB", "scikit-learn", "Pandas", "Numpy",
                                "Matplotlib", "ETL", "Data Visualization", "APIs", "Git"
                            ].map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gradient-to-r from-indigo-50 to-white px-4 py-2 rounded-full shadow-sm text-gray-700 text-sm font-medium hover:shadow-md hover:scale-105 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
