import React from 'react';
import bannerImg from '../assets/MyImage/bannerImg.jpg'
import SocialLinks from './SocialLinks';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mb-16">
            <div className="hero-content flex-col md:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="md:max-w-sm rounded-lg shadow-2xl" />
                <div className='md:mr-20'>
                    <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold">Ferdous Hasan Shifat</h1>
                    <h3 className='text-lg font-semibold'>Software Engineer | <span className='text-purple-900'>MERN Stack Developer</span></h3>
                    <p className="py-6">
                    Passionate Frontend Developer specializing in <br /> responsive and interactive web designs.
                    </p>
                    <SocialLinks></SocialLinks>
                    <button className="btn btn-primary">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;