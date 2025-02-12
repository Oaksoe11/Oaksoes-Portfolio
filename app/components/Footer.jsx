import React from 'react'

const Footer = () => {
  return (
    <div className='px-24'>
        <div className='text-center sm:flex items-center justify-between 
        border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Oak Soe Khant. All rights reserved</p>
            <ul className='flex items-center justify-center mt-4 sm:mt-0 gap-10
            '>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="">Instagram</a></li>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="">LinkedIn</a></li>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="">GitHub</a></li>
            </ul>

        </div>
    </div>
  )
}

export default Footer
