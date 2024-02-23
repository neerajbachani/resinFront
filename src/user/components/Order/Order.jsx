// import React, { useState } from 'react'
// import OrderCard from './OrderCard'
// import menu from '../../../assets/menus.png'

// const Order = () => {
//     const OrderStatus = [
//         {label: 'On The Way' , value: 'on_the_way' },
//         {label: 'Delivered' , value: 'delivered' },
        
//     ]
//     const [isOpenMenu, setIsOpenMenu] = useState(true);

//     const handleClick = () => {
//         setIsOpenMenu(!isOpenMenu)
//     }
    
//   return (
//     <div className=' grid grid-cols-4 ' >
//         <div className=' col-span-1' >
//             <h1>Order Filter</h1>

//             <button className=' block sm:hidden ' onClick={handleClick} >
//                 <img className='w-10 h-10 bg-primarycolor ' src={menu}/>
//             </button>

//             {isOpenMenu && 
//             <div className=' ' >
            
//             {OrderStatus.map((option) => (
//   <div key={option.value} className='flex items-center'>
//     <input id={option.value} defaultValue={option.value} type='checkbox' className='h-8 w-8 border-primarycolor border text-primarycolor focus:ring-offset-light-text-color'></input>
//     <label htmlFor={option.value} className='ml-5 text-xl text-light-text-color'>
//       {option.label}
//     </label>
//   </div>
// ))}
// </div>
//             }


            
//         </div>
//         <div className=' col-span-3 space-y-10 ' >
//             {[1,1,1].map(() => <OrderCard/>)}
//         </div>
//     </div>
//   )
// }

// export default Order

import { Box, Grid } from "@mui/material";
import React, { useEffect, useSyncExternalStore } from "react";
import OrderCard from "./OrderCard";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../redux/Order/Action";
// import BackdropComponent from "../BackDrop/Backdrop";

const orderStatus = [
  { label: "On The Way", value: "onTheWay" },
  { label: "Delivered", value: "delevered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", vlue: "returned" },
];

const Order = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {order}=useSelector(store=>store);

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);

  console.log("users orders ",order.orders)
  return (
    <Box className="px-10">
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5} className="">
          <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filters</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    //   id={`filter-${section.id}-${optionIdx}`}
                    //   name={`${section.id}[]`}
                    defaultValue={option.value}
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    //   htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="ml-3 text-sm text-gray-600"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Box className="space-y-5 ">
            {order.orders?.length>0 && order.orders?.map((order )=> {
              return order?.orderItems?.map((item,index)=> <OrderCard item={item} order={order} />)
            })}
          </Box>
        </Grid>
      </Grid>

      {/* <BackdropComponent open={order.loading}/> */}
    </Box>
  );
};

export default Order;