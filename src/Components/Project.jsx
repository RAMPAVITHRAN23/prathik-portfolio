import React, { useState } from "react";

const projects = [
    {
        id: 1,
title: "Intelligent HSN Code Validation Agent -  Donegal, Ireland ('Atlantic Technological University')",
description:
    `Designed and implemented an intelligent agent using the Google ADK framework to validate HSN codes against Excel-based master
data, enabling accurate classification of traded goods through hierarchical code structure recognition`,
        image:
            "googleadk.png",
    },
    {
        id: 2,
title: "Power BI performance report comparing Year-to-Date ('YTD') vs Previous Year-to-Period ('PYTP') ('Atlantic Technological University') Donegal, Ireland",
description:
    `Developed a performance report comparing Year-to-Date (YTD) vs Previous Year-to-Period (PYTP), focusing on key business metrics
like Gross Profit, Quantity, and Sales. This dashboard provides valuable insights into our business performance trends, helping to
identify growth opportunities and areas for improvement`,
        image:
            "powerbi.jpg",
    },
    // {
    //     id: 3,
    //     title: "IoT Smart Parking",
    //     description:
    //         "IoT-based smart parking system with real-time availability, ANPR security, and demand-based pricing.",
    //     image:
    //         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&auto=format&fit=crop&q=60",
    // },
];

const TiltCard = ({ project }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
        <div
            className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out 
            cursor-pointer max-w-80 bg-white "
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
                {project.title}
            </h3>
            <p className="text-sm px-4 pb-6 text-gray-600">{project.description}</p>
        </div>
    );
};

export default function Projects() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="projects">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        🚀 My Projects
                    </h2>
                    <p className="text-lg text-gray-600 mt-3">
                        Move your cursor over each project to experience a smooth 3D tilt animation.
                    </p>
                </div>

                {/* Grid */}
                <div className="flex flex-wrap gap-10 justify-center">
                    {projects.map((project) => (
                        <TiltCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
