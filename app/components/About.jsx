import { assets, infoList } from '@/assets/assets'
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

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
                max-w-2xl'>
                    {infoList.map(({icon, title, description},
                        index) => (
                        <li className='border-[0.5px] border-gray-400 
                        rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-3 duration-500 hover:shadow-blue'
                        key={index}>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold 
                            text-gray-700'>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default About
