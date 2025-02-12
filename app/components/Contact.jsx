import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d0a50088-021c-4426-9935-cdfe43445bfb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }; 

  return (
    <div id="contact" className=' sm:px-[10%] 
    py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center 
    bg-[length:90%_auto] md:mb-[-50px] md:mt-[-20px]'>
        <div>
        <h4 className='text-center text-lg font-Outfit'>
                Connect with me
        </h4>
        <div className='flex flex-row gap-4 justify-center mt-4'>
                <h2 className='flex text-center text-5xl font-Outfit'>
                    Get in touch
                </h2>

                <ul className='flex gap-4 '>
                    <li>
                        <a href="https://www.instagram.com/oaksoe_11/" target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex  items-center justify-center
                            w-12 sm:w-14 aspect-square border border-gray-400
                            rounded-lg cursor-pointer hover:-translate-y-2
                            duration-500 hover:shadow-blue">
                                <Image src={assets.instagram} alt='instagram'
                                className='w-8'/>

                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/feed/" target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center
                            w-12 sm:w-14 aspect-square border border-gray-400
                            rounded-lg cursor-pointer hover:-translate-y-3 
                            duration-500 hover:shadow-blue">
                                <Image src={assets.linkedin} alt='linkedin'
                                className='w-8'/>

                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Oaksoe11" target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center
                            w-12 sm:w-14 aspect-square border border-gray-400
                            rounded-lg cursor-pointer hover:-translate-y-3 
                            duration-500 hover:shadow-blue">
                                <Image src={assets.github} alt='github'
                                className='w-8'/>

                        </a>
                    </li>
                </ul>
        </div>
            <p className='text-center max-w-2xl mx-auto mt-5 md:mb-[-20px] font-Outfit'>
                I'd love to hear from you! If you have any questions, comments,
                or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto px-5'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-5'>
                    <input type="text" placeholder='Enter your name' required
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                    rounded-md bg-white' name='name'/>
                    <input type="email" placeholder='Enter your email' required 
                    className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                    rouned-md bg-white' name='email'/>
                </div>
                <textarea rows='6' placeholder='Enter your message' required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white mb-6' name='message'></textarea>
                <button type='submit' 
                className='py-3 px-8 w-max flex items-center justify-normal
                gap-2 bg-black/80 text-white rounded-full mx-auto
                hover:bg-blue-500 duration-200'>
                    Submit now
                    <Image src={assets.right_arrow_white} alt='arrow'
                    className='w-4'/>
                    </button>

                    <p className='mt-4'>
                        {result}
                    </p>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
