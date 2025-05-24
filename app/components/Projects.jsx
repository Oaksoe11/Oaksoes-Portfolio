import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

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
        <a href="">
            
        </a>
        <div className='grid grid-cols-auto my-10 gap-5'>
            {workData.map((project, index) => (
            <a key={index} href={project.link} target='_blank' rel='noopener noreferrer'>
                <div  
                    className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                    relative cursor-pointer group'
                    style={{backgroundImage: `url(${project.bgImage})`}}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5
                        left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                        justify-between duration-500 group-hover:bottom-10 group-hover:bg-purple-400'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-grey-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9
                            aspect-square flex items-center justify-center 
                            shadow-[2px_2px_0_#000] group-hover:bg-[#FFB245] transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                            </div>
                        </div>
                </div>
        </a>
        ))}

        </div>

        {/* <a href="" className='w-max flex items-center justify-center gap-2
            text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3
                px-10 mx-auto my-20 hover:bg-lightHover duration-0'>
                Show more
                <Image src={assets.right_arrow_bold} alt='Right arrow'
                className='w-4'/>
      </a> */}
    </div>
  )
}

export default Projects
