import React from 'react';

const Education = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">Educational Qualification</h1>
            <div className="flex flex-col md:flex-row items-center bg-base-200 p-8 rounded-lg shadow-lg">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                    <div className="text-6xl text-primary font-bold animate-bounce">
                        🎓
                    </div>
                </div>
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-semibold mb-4 text-secondary">City University, Savar, Bangladesh</h2>
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Department:</strong> Computer Science and Engineering
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>Major:</strong> Software Engineering
                    </p>
                    <p className="text-lg text-gray-700 mb-2">
                        <strong>CGPA:</strong> 3.65
                    </p>
                    <p className="text-lg text-gray-700">
                        <strong>Year:</strong> 2020 - 2024
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;
