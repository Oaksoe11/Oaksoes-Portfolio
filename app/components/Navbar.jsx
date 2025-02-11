import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className = 'fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt="" className = 'w-full' />
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 `}>
        <a href="#top">
        <h1 className="text-4xl font-bold text-g'ray-900 cursor-pointer">
            OakSoe<span className="text-blue-400">.</span>
            </h1>
        </a>
        <ul className={`hidden md:flex items-center 
        gap-6 lg:gap-8 rounded-full px-12 py-3 : 
            " bg-white shadow-sm bg-opacity-50"}`}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#resume">Resume</a></li> */}
            <li><a href="#projects">My Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
        <a href="#contact" className='hidden lg:flex 
            items-center gap-3 px-10 py-2.5 border border-gray-500
            rounded-full ml-4'>
                Contact 
                <Image src = {assets.arrow_icon} 
                alt='' className='w-3'/>
            </a>

            <button className='block md:hidden ml-3' >
                <Image src={assets.menu_black} alt='' className='w-6' />
            </button>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
