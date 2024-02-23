
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const {id, name, image, price } = product;
  
//   // Filter products based on selected subcategories
  
//   // const filteredProducts = product.filter(product => {
//   //   // If no subcategories are selected, show all products
//   //   if (selectedSubcategories.length === 0) {
//   //     return true;
//   //   }
//   //   // Show products that match at least one selected subcategory
//   //   return selectedSubcategories.includes(product.subCategory);
//   // });

//   return (
//     <div >
      
//     <section className=' flex flex-wrap   gap-12  ' >
   
//           <Link to={`/products/${product?._id}`} key={product?._id}>
//             {/* Wrap the product card with Link */}
//             <div>
//               <div className='w-[25rem] h-[30rem]'>
//                 <img className='object-cover w-full h-full' src={`${image}`} alt={`product-${id}`} />
//               </div>
//               <p className='font-poppins max-w-xs text-3xl'>{name}</p>
//               <p className='font-poppins text-xl'>{price}</p>
//               {/* <p className='font-poppins text-xl'>{product.description}</p> */}
//               {/* ... other product details */}
//             </div>
//           </Link>
    

//     </section>
//     </div>
//   );
// }

// export default ProductCard;

const ProductCard = ({ product }) => {
  const { name, brand, image, price ,discountedPrice,color,discount} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/products/id/${product?._id}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard   m-3 transition-all cursor-pointer '>
    <div className='h-[20rem] relative w-[17rem]'>
        <img className='h-full w-full object-cover absolute top-0 right-0 ' src={image} alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        {/* <p  className='font-bold opacity-60'>{brand}</p> */}
            <p className=' text-secondary-dark-color text-xl font-poppins'>{name}</p>
        
        {/* <p className='font-semibold opacity-50'>{color}</p> */}
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold font-poppins text-primarycolor text-2xl'>₹{discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{price}</p>
            <p className='text-green-600 font-semibold  font-poppins text-[#219ebc]'>{discount}% off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;




