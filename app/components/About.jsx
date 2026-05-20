import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='w-full px-6 sm:px-[8%] py-20 scroll-mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h4 className='text-center mb-2 text-lg font-Outfit'>
            Introduction
        </h4>

        <h2 className='text-center text-5xl font-Outfit'>
            About me
        </h2>

        <div className='flex w-full flex-col lg:flex-row items-center
        justify-center gap-12 xl:gap-20 mt-12'>
            <div className='w-64 sm:w-80 lg:w-72 xl:w-80 rounded-3xl max-w-none shrink-0'>
                <Image src={assets.profile_img} alt='user'
                className='w-full rounded-3xl filter contrast-115'/>
            </div>
            <div className='w-full max-w-3xl'>
                <p className='mb-10 font-Outfit text-gray-700'>
                    I am a Software Systems student at Simon Fraser University
                    focused on full-stack development, AI-powered tools, and secure
                    software practices. I enjoy building practical applications,
                    debugging real product issues, and turning messy requirements
                    into reliable user-facing experiences.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6
                w-full'>
                    {infoList.map(({icon, title, description},
                        index) => (
                        <li className='border-[0.5px] border-gray-400
                        rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-2 duration-500 hover:shadow-blue'
                        key={index}>
                            <Image src={icon} alt={title} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold 
                            text-gray-700'>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4 className='my-6 text-gray-700 font-Outfit'>
                    Tools I use
                </h4>
                <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index) => (
                         <li key={index} className="flex items-center justify-center">
                         <a
                           href={tool.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center justify-center
                             w-12 sm:w-14 aspect-square border border-gray-400
                             rounded-lg cursor-pointer hover:-translate-y-2
                             duration-500 hover:shadow-blue">
                            <Image src={tool.image} alt='Tool' className='w-5
                            sm:w-7'/>
                        </a>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default About
