import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Category from './component/Category/Category'
import Category2 from './component/Category/Category2'
import Services from './component/Services/Services'
import Banner from './component/Banner/Banner'

import headphone from './assets/hero/headphone.png'
import smartwatch from './assets/category/smartwatch2-removebg-preview.png'

import Products from './component/Products/Products'
import Blog from './component/Blog/Blog'
import Partners from './component/Partners/Partners'
import Footer from './component/Footer/Footer'
import Popup from './component/Popup/Popup'

import AOS from 'aos';
import "aos/dist/aos.css";


const BannerData ={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  bgColor: "#f42C37",

};

const BannerData2 ={
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  bgColor: "#2dcc6f",

};




const App = () => {
  const[orderPopup, setOrderPopup]= React.useState(false)

  const handlePopup =()=>{
    setOrderPopup(!orderPopup)
  }

  React.useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    )
    AOS.refresh();
  },[])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handlePopup={handlePopup}/>
      <Hero handlePopup={handlePopup}/>
      <Category />
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blog/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handlePopup={handlePopup}/>
    </div>
  )
}

export default App