import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* About Me */}
            <div>
                <AboutMe></AboutMe>
            </div>
            {/* Skills */}
            <div>
                <Skills></Skills>
            </div>
            {/* Education */}
            <div>
                <Education></Education>
            </div>
            {/* Projects */}
            <div>
                <Projects></Projects>
            </div>

        </div>
    );
};

export default Home;