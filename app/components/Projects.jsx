import { assets, workData } from '@/assets/assets'
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div id="projects" className='w-full px-[12%] py-6 mt-32 scroll-mt-20 min-h-screen'>
        <h4 className='text-center mb-2 text-lg font-Outfit'>
            My Portfolio
        </h4>

        <h2 className='text-center text-5xl font-Outfit'>
            My latest work
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Outfit'>
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my hands-on experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {workData.map((project, index) => (
            <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md cursor-pointer border-gray-300"
            >
            {/* Project image */}
            <div
                className="w-full h-64 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            {/* Project content */}
            <div className="p-5">
                <div className="flex justify-between items-start flex-wrap gap-4">

                {/* Text Section */}
                <div className="flex flex-col max-w-[60%]">
                    <h2 className="font-semibold text-xl mb-1">{project.title}</h2>
                    <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-1">
                    {project.livelink && (
                    <a
                        href={project.livelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-white rounded-lg text-blue-500 border border-blue-500 
                        px-4 mt-[-10px] duration-300 hover:bg-blue-500 font-semibold hover:text-white"
                    >
                        Live
                    </a>
                    )}
                    {project.repolink && (
                    <a
                        href={project.repolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-white rounded-lg text-blue-500 border border-blue-500 
                        px-4 duration-300 hover:bg-blue-500 font-semibold hover:text-white"
                    >
                        Code
                    </a>
                    )}
                </div>

                </div>
            </div>
            </motion.div>
  ))}
</div>



    </div>

    //     {/* <a href="" className='w-max flex items-center justify-center gap-2
    //         text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3
    //             px-10 mx-auto my-20 hover:bg-lightHover duration-0'>
    //             Show more
    //             <Image src={assets.right_arrow_bold} alt='Right arrow'
    //             className='w-4'/>
    //   </a> */}
  )
}

export default Projects
