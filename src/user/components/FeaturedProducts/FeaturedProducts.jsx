import React from 'react';
import featuredproducts1 from '../../../assets/FeaturedProducts1.jpg';
import featuredproducts2 from '../../../assets/FeaturedProducts2.jpg';
import featuredproducts3 from '../../../assets/FeaturedProducts3.jpg';
import featuredproducts4 from '../../../assets/FeaturedProducts4.jpg';


const products = [
  {
    image: featuredproducts1,
    name: 'Jewel Bracelet - Butterfly Design',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts2,
    name: 'Diwali thali- Festival special',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts3,
    name: 'Resin Watch',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts4,
    name: 'Digital Art',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts1,
    name: 'Jewel Bracelet - Butterfly Design',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts2,
    name: 'Diwali thali- Festival special',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts3,
    name: 'Resin Watch',
    price: '499₹',
    discountedPrice: '549₹',
  },
  {
    image: featuredproducts4,
    name: 'Digital Art',
    price: '499₹',
    discountedPrice: '549₹',
  },
];

const FeaturedProducts = () => {
  

  return (
    <section className='mt-[5rem]'>
      
      <div className='flex justify-between items-center mx-[4rem]'>
        <h3 className='relative font-bold text-secondary-dark-color text-4xl font-poppins'>
          Featured Products
        </h3>
        <a href='/products' className=' absolute z-20 right-16 mt-20 text-secondary-dark-color text-xl '>
          View All→
        </a>
      </div>
      {/* <div className='mx-5 h-[0.3rem] bg-light-bg-color'></div> */}
      <div className='flex flex-wrap justify-between items-center px-[4rem] pt-[3rem] bg-blue-primary bg-opacity-20'>
        
        {products.map((product, index) => (
  <div key={index} className="group flex  max-w-sm flex-col overflow-hidden bg-white">
    <a className="relative flex h-[18rem] w-[15rem] overflow-hidden" href="#">
      <img className="absolute top-0 right-0 h-full w-full  object-cover" src={product.image} alt="product image" />
     
      <div className="absolute -right-24 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-4 group-hover:bottom-4">
       
        <button className="flex h-14 w-14 items-center justify-center hover:bg-primarycolor rounded-full    text-whitecolor transition bg-[#b4afaf7d]">
          <svg xmlns="http://www.w3.org/2000/svg" className=" h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </button>
      </div>
    </a>
    <div className="mt-2 ">
      <a href="#">
        <h5 className="text-center tracking-tight text-gray-500 font-poppins text-xl text-secondary-dark-color  ">{product.name}</h5>
      </a>
      <div className="mb-5 mt-1 flex justify-center">
        <p>
          <span className="font-bold text-primarycolor text-lg ">{product.price}</span>
          <span className="text-sm text-[#7a7575] line-through ml-3 ">{product.discountedPrice}</span>
        </p>
      </div>
    </div>
  </div>
))}
      </div>
      
    </section>
  );
};

export default FeaturedProducts;
