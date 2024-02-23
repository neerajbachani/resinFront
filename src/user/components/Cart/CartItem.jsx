// import React from 'react'
// import cartImg from '../../../assets/FeaturedProducts1.jpg'
// import minus from '../../../assets/icons8-minus-50.png'
// import plus from '../../../assets/icons8-plus-50.png'
// import cross from '../../../assets/icons8-cross-50.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateCartItemQuantity, removeItemFromCart } from '../../redux/slice/CartSlice';

// const CartItem = ({item}) => {

//   // const dispatch = useDispatch();

//   // const handleQuantityChange = (newQuantity) => {
//   //   dispatch(updateCartItemQuantity({ itemId: item.id, quantity: newQuantity }));
//   // };

//   // const handleRemoveItem = () => {
//   //   dispatch(removeItemFromCart(item.id));
//   // };

//   return (
// <div className=' ' >

//     <div className=' mt-10  grid grid-flow-col grid-cols-3 pl-10 pr-3  mx-5 py-10 bg-secondarycolor ' >
//         <div className=' col-span-2  '>
//         <p className='text-2xl font-poppins ' >Product Name</p>
//         </div>
//         <div className=' flex justify-between -ml-10 ' >
//         <p className='text-2xl font-poppins' >Price</p>
//         <p className='text-2xl font-poppins' >Quantity</p>
//         <p className='text-2xl font-poppins' >Remove</p>
      

//         </div>
        

//     </div>
 
//     <div className=' grid grid-cols-3  items-center  px-10  mx-5 py-10 bg-light-bg-color -mt-[1rem] ' >
//         <div className=' flex gap-8 items-center col-span-2  '>
//         <img className=' object-cover w-40 h-40' src={item.image} />
//        <p className='text-4xl font-poppins'>{item.name}</p>
//         </div>
//         <div className=' flex justify-between  ' >
//         <p className='text-2xl font-poppins' >{item.price}</p>
//         <div className=' flex gap-5 ' >
//           <button onClick={() => handleQuantityChange(item.quantity - 1)} >
//             <img className=' h-6 w-6' src={minus} />
//           </button>
//         <p className='text-2xl font-poppins' >{item.quantity}</p>
//         <button onClick={() => handleQuantityChange(item.quantity + 1)}>
//           <img className=' h-6 w-6' src={plus} />
//         </button>

        
//         </div>
        
        
//        <button onClick={handleRemoveItem}>
//           <img className='h-6 w-6' src={cross} />
//         </button>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default CartItem

import React from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../redux/Cart/Action";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({ item,showButton }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt };
    dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    console.log("update data ",data)
    dispatch(updateCartItem(data))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.image}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item?.product?.name}</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-lg">
              ₹{item?.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item?.product?.discount}% off
            </p>
          </div>
        </div>
      </div>
     {showButton&& <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item?.quantity<=1} color="primary" aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton onClick={()=>handleUpdateCartItem(1)} color="primary" aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>}
      
    </div>
  );
};

export default CartItem;
