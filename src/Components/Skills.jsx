import React from "react";

const Skills = () => {
    // Skills with icons (Devicon CDN + placeholders)
    const skillLogos = [
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "R", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
        { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Hadoop", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
        { name: "Spark", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Scikit-learn", src: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" },
        { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", src: "https://matplotlib.org/_static/images/logo2.svg" },
        { name: "ETL", src: "https://img.icons8.com/fluency/96/data-configuration.png" }, // placeholder
        { name: "Data Visualization", src: "https://img.icons8.com/fluency/96/combo-chart.png" }, // placeholder
        { name: "APIs", src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-api-web-development-flaticons-lineal-color-flat-icons.png" }, // placeholder
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ];

    return (
        <>
            <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

            <div className="w-full max-w-6xl mx-auto text-center py-12">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-gray-800 mb-10">
                    My Skills
                </h1>

                {/* Scrolling Skills */}
                <div className="overflow-hidden w-full relative select-none">
                    {/* Left Fade */}
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

                    {/* Logos moving */}
                    <div
                        className="marquee-inner flex will-change-transform min-w-[200%]"
                        style={{ animationDuration: "20s" }}
                    >
                        <div className="flex">
                            {[...skillLogos, ...skillLogos].map((logo, index) => (
                                <div key={index} className="flex flex-col items-center mx-6">
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="w-16 h-16 object-contain"
                                        draggable={false}
                                    />
                                    <p className="mt-2 text-sm text-gray-700 font-medium">{logo.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                </div>
            </div>
        </>
    );
};

export default Skills;
