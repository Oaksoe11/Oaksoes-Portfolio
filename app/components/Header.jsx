'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='flex lg:flex-row lg:items-start h-screen gap-10'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='w-full lg:w-7/12 max-w-3xl flex flex-col gap-4 px-6 sm:px-4 lg:ml-24 lg:py-20 min-h-screen'
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className='flex items-end gap-2 text-xl md:text-2xl font-Outfit mt-28 ml-1'
        >
          Hi! I'm OakSoe
          <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className='text-3xl sm:text-6xl lg:text-[70px] font-Ovo'
        >
          Second Year Engineering Science student at <br />
          Simon Fraser University
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
          className='max-w-2xl font-Outfit lg:text-[24px]'
        >
          Passionate about web development and AI. Experienced with C++, Java, HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and SQLite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 mt-4'
        >
          <a
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-blue-500 duration-200'
          >
            Contact me
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-blue-500 duration-200 hover:text-white'
          >
            My Resume
            <Image src={assets.download_icon} alt='download' className='w-4' />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
        className='hidden lg:flex lg:w-5/12 justify-center mt-12'
      >
        <Image
          src={assets.profile_imgg}
          alt=''
          className='rounded-full w-80 h-auto shadow-xl py-28 filter brightness-90 contrast-125'
        />
      </motion.div>
    </div>
  )
}

export default Header
