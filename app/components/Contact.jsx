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
        </div>
        </div>
      
    </div>
  )
}

export default Contact
