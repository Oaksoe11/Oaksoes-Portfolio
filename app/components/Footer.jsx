import React from 'react'

const Footer = () => {
  return (
    <footer className='px-6 sm:px-[8%]'>
        <div className='mx-auto max-w-7xl text-center sm:flex items-center justify-between
        border-t border-gray-400 py-6'>
            <p>© 2026 Oak Soe Khant. All rights reserved.</p>
            <ul className='flex flex-wrap items-center justify-center mt-4 sm:mt-0 gap-6 sm:gap-10'>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="https://www.instagram.com/oaksoe_11/">Instagram</a></li>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="https://www.linkedin.com/in/oak-soe-khant-6875b72a1/">LinkedIn</a></li>
                <li className='hover:-translate-y-2 duration-300'><a target='_blank' href="https://github.com/Oaksoe11">GitHub</a></li>
            </ul>

        </div>
    </footer>
  )
}

export default Footer
