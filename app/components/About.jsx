import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-2 scroll-mt-20 min-h-screen mt-5'>
        <h4 className='text-center mb-2 text-lg font-Outfit'>
            Introduction
        </h4>

        <h2 className='text-center text-5xl font-Outfit'>
            About me
        </h2>

        <div className='flex w-full flex-col lg:flex-row items-center
        gap-20 mt-8'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.profile_img} alt='user'
                className='w-full rounded-3xl filter contrast-115'/>
            </div>
            <div className='flex-1 '>
                <p className='mb-10 max-w-2xl font-Outfit'>
                    I am a second-year Computer Science student with a strong 
                    interest in web development and artificial intelligence. 
                    I am eager to learn new technologies, improve my problem-solving 
                    skills, and work on innovative projects that make an impact. 
                    My curiosity drives me to explore various domains in technology 
                    while continuously expanding my knowledge and expertise
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default About
