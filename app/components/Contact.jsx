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
                        <a href="" target="_blank" 
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
                        <a href="" target="_blank" 
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
                        <a href="" target="_blank" 
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

        </div>
      
    </div>
  )
}

export default Contact
