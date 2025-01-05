import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Projects = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('/myProjects.json');
                setProjects(res.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto px-4 py-16 ">
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="card card-compact bg-base-100 w-71 md:w-96 shadow-xl hover:scale-105 transition-transform duration-300">
                        <figure>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={project.image1} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={project.image2} alt="" /></SwiperSlide>
                                <SwiperSlide><img src={project.image3} alt="" /></SwiperSlide>
                                
                            </Swiper>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <div className="flex justify-between">
                                <div className="card-actions">
                                    <button className="btn btn-primary">
                                        <a href={project.liveLink} target='_blank'>Live View</a>
                                    </button>
                                </div>
                                <div className="card-actions">
                                    <Link to={`project/${project.id}`} className="btn btn-primary">Project Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
