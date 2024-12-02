import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'

import Image1 from '../../assets/products/p-1.jpg'
import Image2 from '../../assets/products/p-2.jpg'
import Image3 from '../../assets/products/p-3.jpg'
import Image4 from '../../assets/products/p-4.jpg'
import Image6 from '../../assets/products/p-4.jpg'
import Image5 from '../../assets/products/p-5.jpg'
import Image7 from '../../assets/products/p-7.jpg'
import Image9 from '../../assets/products/p-9.jpg'


const ProductData =[
  {
    id: 1,
    img:Image1,
    title: "Boat Headphone",
    price: "120",
    a0sDelay: "0",
  },
  {
    id: 2,
    img:Image2,
    title: "Rocky Mountain",
    price: "420",
    a0sDelay: "200",
  },
  {
    id: 3,
    img:Image3,
    title: "Googles",
    price: "320",
    a0sDelay: "400",
  },
  {
    id: 4,
    img:Image4,
    title: "Printed",
    price: "220",
    a0sDelay: "600",
  },
];

const ProductData2 =[
  {
    id: 1,
    img:Image6,
    title: "Boat Headphone",
    price: "120",
    a0sDelay: "0",
  },
  {
    id: 2,
    img:Image5,
    title: "Rocky Mountain",
    price: "420",
    a0sDelay: "200",
  },
  {
    id: 3,
    img:Image7,
    title: "Googles",
    price: "320",
    a0sDelay: "400",
  },
  {
    id: 4,
    img:Image9,
    title: "Printed",
    price: "220",
    a0sDelay: "600",
  },
];
const Products = () => {
  return (
    <div>
      {/* heading section */}
      <div className='container'>
        <Heading
        title="Our Products" 
        subtitle={"Explore Our Produccts"}
        />

      </div>
      {/* body section */}
      <div>
        <ProductCard data ={ProductData}/>
        <ProductCard data={ProductData2}/>

      </div>
    </div>
  )
}

export default Products