import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className = 'fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt="" className = 'w-full' />
        </div>
    </div>
  )
}

export default Navbar
