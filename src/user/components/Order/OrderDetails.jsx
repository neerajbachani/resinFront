// import AddressCard from '../CheckOut.jsx/AddressCard'
// import React from 'react';
// import OrderTracker from './OrderTracker';
// import orderimage from '../../../assets/TrendingProductsWearings.jpeg'


// const OrderDetails = () => {
  

//   return (
//     <div>
//         <AddressCard/>


//         <div className=' mt-10 max-w-7xl mx-auto border border-secondarycolor shadow-inner p-10 ' >   
    
//     <OrderTracker/>
//     </div>
//     {[1,1,1].map((item)=> (
//             <div className=' mt-10 flex items-center justify-between border border-light-text-color shadow-lg px-20 py-20 ' >
//             <div className=' flex items-center ' >
//                 <img className=' w-28 h-28 object-cover ' src={orderimage}/>
//             <h1 className=' text-3xl' >product name</h1>
//             </div>
                    
//                     <p className=' text-3xl' >price</p>
//                     <p className=' text-3xl' >order status</p>
//                     <div>
//                         {/* <img src={star} /> */}
//                         <p className=' text-3xl text-secondary-dark-color ' >Rate & Reviews</p>
//                     </div>
    
//     </div>
//     ))}
    
//     </div>
//   );
// };

// export default OrderDetails;
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import OrderTraker from "./OrderTracker";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate, useParams } from "react-router-dom";
import AddressCard from "../Address/AddressCard";
import { deepPurple } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../../redux/Order/Action";
// import BackdropComponent from "../BackDrop/Backdrop";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);

  console.log("order", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);

  const navigate = useNavigate();
  return (
    <>
     {!order.loading && <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard address={order.order?.shippingAddress} />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTraker
              activeStep={
                order.order?.orderStatus === "DELIVERED"
                  ? 5
                  : order.order?.orderStatus === "CONFIRMED"
                  ? 2
                  : order.order?.orderStatus === "SHIPPED"
                  ? 3
                  : 1
              }
            />
          </Grid>
          <Grid item>
           {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {order.order?.orderStatus!=="DELIVERED" && <Button sx={{ color: deepPurple[500] }} variant="text">
              cancel order
            </Button>}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.price} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: deepPurple[500] }}
                  onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>

     
    </div>}
     {/* <BackdropComponent open={order.loading}/> */}
    </>
   
  );
};
// sx={{width:"10px",height:"10px"}}
export default OrderDetails;
