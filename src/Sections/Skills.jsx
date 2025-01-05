import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiJavascript, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
];

const Skills = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:grid-cols-5">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 hover:bg-primary hover:text-white"
                    >
                        <div className="text-5xl mb-4 animate-pulse">
                            {skill.icon}
                        </div>
                        <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
