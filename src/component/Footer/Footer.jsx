import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaWhatsapp } from "react-icons/fa";
const FooterLinks =[
  {
    title:"Home",
    link: "/#",
  },
  {
    title:"About",
    link: "/#about",
  },
  {
    title:"Contact",
    link: "/#contact",
  },
  {
    title:"Blog",
    link: "/#blog",
  },
]
const Footer = () => {
  return (
    <div>
      <div className="container dark:bg-gray-950">
        <div className='grid md:grid-cols-3 pb-2 pt-5'>
          {/* company details */}
          <div className='py-8 px-4'>
          <a href="#"
            className='text-primary font-semibold tight-widest text-2xl uppercase sm:text-3xl'
            >Eshop </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Id 
              necessitatibus blanditiis aperiam enim voluptatibus!</p>
              <p className='text-gray-500 dark:text-white/70  mt-4'>Made with ❤️ by The Coding  </p>
              <a href="#" target='blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full '>
               Visit
              </a>
          </div>
          {/* footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index)=>(
                    <li key={index}>
                      <a href={data.link} className='text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300'>
                        {data.title}
                      </a>

                    </li>

                  ))
                }
              </ul>
            </div>
            {/* second col link */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index)=>(
                    <li key={index}>
                      <a href={data.link} className='text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300'>
                        {data.title}
                      </a>

                    </li>

                  ))
                }
              </ul>
            </div>

            {/* company address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
              <div>
                <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Raichur, Karnataka</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 12345</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className='text-2xl hover:text-primary duration-300' />
                  </a>
                  <a href="#">
                    <FaFacebook className='text-2xl hover:text-brandBlue duration-300' />
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-2xl hover:text-brandBlue duration-300' />
                  </a>
                  <a href="#">
                    <FaWhatsapp className='text-2xl hover:text-brandGreen duration-300' />
                  </a>
                
                </div>

              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer