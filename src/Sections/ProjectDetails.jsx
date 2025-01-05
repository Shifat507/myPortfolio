import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const { id } = useParams();

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

    const project = projects.find(projectItem => String(projectItem.id) === String(id));

    return (
        <div>
            {project ? (
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="w-2/4">
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
                                {project.image1 && (
                                    <SwiperSlide><img src={project.image1} alt="Project Slide 1" /></SwiperSlide>
                                )}
                                {project.image2 && (
                                    <SwiperSlide><img src={project.image2} alt="Project Slide 2" /></SwiperSlide>
                                )}
                                {project.image3 && (
                                    <SwiperSlide><img src={project.image3} alt="Project Slide 3" /></SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold">{project.name}</h1>
                            <p className="py-6">
                                {project.details}
                            </p>
                            <a
                                href={project.clientSide}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary flex items-center gap-2"
                            >
                                <FaGithub /> View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center py-10">Loading project details...</p>
            )}
        </div>
    );
};

export default ProjectDetails;
