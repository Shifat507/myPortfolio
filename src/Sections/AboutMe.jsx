import React from 'react';
import myPhoto from '../assets/MyImage/shifat.jpg';
const AboutMe = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">About Me</h1>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <img
                        src={myPhoto}
                        className="md:max-w-xs rounded-lg shadow-2xl" />
                    <div className='md:ml-6'>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">Hello, I’m Shifat!</h1>
                        <p className="md:py-4 text-md">
                            I am a passionate coder with a deep love for creating and solving problems. During my university years, I actively engaged in competitive programming, sharpening my problem-solving and analytical skills. However, my true passion lies in web development.
                            <br />
                            Beyond the keyboard, I enjoy reading, especially Humayun Ahmed’s books, and listening to music by my favorite singer, James. Together, coding, reading, and music form a harmonious blend that fuels my creativity and drive.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;