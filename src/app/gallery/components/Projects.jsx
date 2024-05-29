"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollingIframeMockup from '../components/ScrollingIframeMockup';

const projects = [
    { id: 1, title: 'Project 1', image: '/ice_ball.png', description: 'Description of Project 1', video: '/casamarerio.mov', mockup: '/mockup_desktop.png' },
    { id: 2, title: 'CASA MARERIO', image: '/casa-marerio.webp', description: 'Description de casa marerio', video: '/capture_casamarerio_desktop.mp4', mockup: '/mockup_desktop.png' },
    { id: 3, title: 'Project 3', image: '/ice_ball.png', description: 'Description of Project 3', video: '/casamarerio.mov', mockup: '/mockup_desktop.png' },
    { id: 4, title: 'Project 4', image: '/irridescent-shape-twisted.png', description: 'Description of Project 4',video: '/casamarerio.mov', mockup: '/mockup_desktop.png' },
    { id: 5, title: 'Project 5', image: '/ice_ball.png', description: 'Description of Project 5',video: '/casamarerio.mov', mockup: '/mockup_desktop.png' },
    { id: 6, title: 'Project 6', image: '/irridescent-shape-twisted.png', description: 'Description of Project 6', video: '/casamarerio.mov', mockup: '/mockup_desktop.png' },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="container mx-auto p-4">
            <div className="flex overflow-x-auto space-x-4 py-4 hide-scrollbar">
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="relative w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex items-center justify-center text-center "
                        >
                            <h3
                                className="font-kanit text-4xl font-extrabold bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    textShadow: '0 0px 0px rgba(255, 255, 255, 0.3)'
                                }}
                            >
                                {project.title}
                            </h3>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {selectedProject && (
                <>
                <div className="mt-8 p-4 border rounded-lg">
                    <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                    <p>{selectedProject.description}</p>
                </div>
                <ScrollingIframeMockup videoSrc={selectedProject.video} mockupSrc={selectedProject.mockup} />
                </>
            )}
        </div>
    );
}

export default Projects;




