import React from 'react'
import Heading from '../shared/Heading'
import Image1 from '../../assets/blogs/blog-1.jpg'
import Image2 from '../../assets/blogs/blog-2.jpg'
import Image3 from '../../assets/blogs/blog-3.jpg'





const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima velit delectus eos accusantium debitis culpa corrupti voluptatem.",
    published: "Jan 20, 2024 by Dilshed",
    image:Image1,
    aosDelay:"0",
  },
  {
    title: "How to choose perfect gadget",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima velit delectus eos accusantium debitis culpa corrupti voluptatem.",
    published: "Jan 20, 2024 by Satya",
    image: Image2,
    aosDelay:"200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minima velit delectus eos accusantium debitis culpa corrupti voluptatem.",
    published: "Jan 20, 2024 by Sabir",
    image: Image3,
    aosDelay:"400",
  },
]


const Blog = () => {
  return (
    <div className='my-12'>
      <div className='container'>
        {/* heading section */}
        <Heading
        title="Recent News"
        subtitle={"Explore Our Blogs"}
        />
        {/* blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
      
        {
          BlogData.map((data)=>(
            <div 
            data-aos="fade-up"
              data-aos-delay={data.aosDelay}
            key={data.title} className='bg-white dark:bg-gray-900'>
            <div className='overflow-hidden rounded-2xl mb-2'>
              {/* image section */}
              <img src={data.image} alt=""  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
              <div className='space-y-2'>
               {/* content section */}
               <p className='text-xs text-gray-500'>{data.published}</p>
               <p className='font-bold line-clamp-1'> {data.title}</p>
               <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
              </div>
              
            </div>
            </div>
      
            

          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Blog