import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='flex lg:flex-row lg:items-start h-screen gap-10'>
        <div className='w-full lg:w-7/12 max-w-3xl flex flex-col
            gap-4 px-6 sm:px-4 lg:ml-24 lg:py-20 min-h-screen '>

            <h3 className='flex items-end gap-2 text-xl md:text-2xl 
                font-Outfit mt-28 ml-1'>
                Hi! I'm OakSoe
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:text-[70px] font-Ovo'>
                Second Year Computer Science student at <br/>
                Simon Fraser University
            </h1>
            <p className='max-w-2xl  font-Outfit lg:text-[24px]'>
                Passionate about web development and AI.
                Experienced with C, C++, Java, HTML, CSS, JavaScript, Next.js, Node.js, 
                Tailwind CSS, MongoDB and SQLite.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4 '>
                <a href="#contact"
                className='px-10 py-3 border border-white rounded-full bg-black
                text-white flex items-center gap-2 hover:bg-blue-500 duration-200'>
                    Contact me
                    <Image src={assets.right_arrow_white} alt='' 
                    className='w-4' />
                </a>

                <a href="/sample-resume.pdf" download 
                className='px-10 py-3 border rounded-full border-gray-500
                flex items-center gap-2 hover:bg-blue-500 duration-200 hover:text-white'>
                    My Resume
                    <Image src={assets.download_icon} alt='download' 
                    className='w-4' />
                </a>
            </div>
        </div>
        <div className='hidden lg:flex lg:w-5/12 justify-center'>
                <Image src={assets.profile_imgg} alt=''
                className='rounded-full w-80 h-auto shadow-xl 
                py-28 filter brightness-90 contrast-125'/>
        </div>
    </div>
  )
}

export default Header
