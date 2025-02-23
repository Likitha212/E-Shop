import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";

const MenuLinks =[
  {
    id: 1,
    name: "Home",
    link: "/#",

},
{
  id: 2,
  name: "Shop",
  link: "/#shop",

},
{
  id: 3,
  name: "About",
  link: "/#about",

},
{
  id: 4,
  name: "Blog",
  link: "/#blog",

},
];

const DropdownLink = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",

  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",

  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",

  },
];


const Navbar = ({handlePopup}) => {
 

 


  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex items-center justify-between">
          {/* logo and links section */}
          <div className='flex items-center gap-4'>
            <a href="#"
            className='text-primary font-semibold tight-widest text-2xl uppercase sm:text-3xl'
            >Eshop </a>
            {/* menu icons */}
            
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {
                  MenuLinks.map((data, index)=> (
                    
                    <li key={index}>
                      <a href={data.link}
                      className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'
                      >{data.name}</a>
                    </li>
                  )) }
                  {/* dropdown */}
                  <li className='relative cursor-pointer group'>
                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 hover:text-black  dark:hover:text-white py-2'>
                      Quick Links
                      <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300' />
                    </span>
                    </a>
                    {/* dropdown link */}
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                      <ul className='space-y-2'>
                        {
                          DropdownLink.map((data, index)=>(
                            <li>
                              <a className='text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold'
                               href={data.link}>{data.name}</a>
                            </li>

                          ))
                        }
                      </ul>
                    </div>

                    
                  </li>
              </ul>
            </div>
          </div>
          
          {/* navbar right section */}
          <div className='flex items-center justify-between gap-4'>
            {/* search bar section */}
            <div className='relative group hideen sm:block '>
              <input type="text"  placeholder='Search' className='search-bar ' />
               <IoMdSearch className='text-xl text-gray-600 group-hover:text-primary dark:text-gray-600 absolute top-1/2 right-3 -translate-y-1/2 duration-200' />
             
            </div>
            {/* order button section (cart) */}
            <button className='relative px-3 'onClick={handlePopup}>
            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-600' />
            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0  flex items-center justify-center text-xs'>1</div>
            </button>
           
            {/* dark mode section */}
            <div className='flex'>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>
     
     </div>
  )
}

export default Navbar