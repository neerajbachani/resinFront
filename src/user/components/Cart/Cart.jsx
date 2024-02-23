// import React from 'react'
// import CartItem from './CartItem'
// import { Link, useNavigate } from 'react-router-dom'
// // import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux';


// const Cart = () => {

//   // const cartItems = useSelector((state) => state.cart.cartItems);

//   // const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   // const totalDiscount = cartItems.reduce((total, item) => total + (item.originalprice - item.price  ) * item.quantity, 0);

//   const navigate = useNavigate();

//   const handleCheckOut = () => {
//         navigate("/checkout?step=2");
//   }
//   // console.log(cartItems)

//   if (cartItems.length === 0) {
//     return (
//       <>
//       <div className=' flex flex-col justify-center align-middle mt-20 ' >
//       <p className=' text-5xl font-poppins font-semibold text-secondary-dark-color text-center' >Your Cart Is Empty!!</p>
  
//       <button className=' mt-10 text-3xl font-poppins font-medium text-whitecolor bg-primarycolor p-5 max-w-[20rem] mx-auto rounded-lg' ><a href='/'>Shop Now</a></button>
 
      
//       </div>
//       </>
      
//     )
//   }
//   return (
//     <>
//      <h1 className='text-5xl font-semibold font-poppins text-left ml-16 my-8 ' >Shopping Cart</h1>
//     <div className=' grid grid-cols-4  mx-10 ' >
//       <div className='  col-span-3 ' >
//       {/* {cartItems.map((item) => (
//         <CartItem key={item.id} item={item} />
        
       
        
//       ))} */}
      
//       </div>
//       <div className='   pt-20 bg-light-bg-color col-span-1 space-y-5  ' >
//         <div className=' flex justify-between px-10 ' >
//         <p className=' font-poppins text-4xl ' >price</p>
//         {/* <p className=' font-poppins text-4xl ' >{subtotal}</p> */}
//         </div>
//         <div className=' flex justify-between px-10 ' >
//         <p className=' font-poppins text-4xl ' >Discount</p>
//         {/* <p className=' font-poppins text-4xl ' >-{totalDiscount}</p> */}
//         </div>
//         <div className=' flex justify-between px-10 ' >
//         <p className=' font-poppins text-4xl ' >Dilevery</p>
//         <p className=' font-poppins text-4xl ' >+50</p>
//         </div>
//         <div className=' flex justify-between px-10 ' >
//         {/* <p className=' font-poppins text-4xl ' >Subtotal: {subtotal}</p> */}
//         </div>    
//         <button onClick={handleCheckOut} className=' bg-secondarycolor w-full rounded-md font-poppins text-secondary-dark-color py-5 text-5xl ' >
//           Check Out
//         </button> 
        
//       </div>
//     </div>
//     </>
//   )
// }

// export default Cart

import React from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../redux/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store);
  console.log("cart ",cart)

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt, cart.addedCartItems, cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div className="">
      {cart.cartItems.length>0 && <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 lg:px-5 bg-white">
        <div className=" space-y-3">
          {cart.cartItems.map((item) => (
            <>
              <CartItem item={item} showButton={true}/>
            </>
          ))}
        </div>
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
        <div className="border p-5 bg-white shadow-lg rounded-md">
          <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
          <hr />

          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3 text-black ">
              <span>Price ({cart.cart?.totalItem} item)</span>
              {/* <span>₹{cart.cart.totalPrice}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-700">-₹{cart.cart?.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-700">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Amount</span>
              <span className="text-green-700">₹{cart.cart?.totalPrice}</span>
            </div>
          </div>

          <Button
            onClick={() => navigate("/checkout?step=2")}
            variant="contained"
            type="submit"
            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
          >
            Check Out
          </Button>
        </div>
      </div>
      </div>}
      
    </div>
  );
};

export default Cart;