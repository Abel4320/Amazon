import React, { useEffect, useState } from 'react';
import { db } from './fire';
import { useSelector } from 'react-redux';
import moment from 'moment'

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userEmail = useSelector((state) => state.cart.email);

  // useEffect(() => {
  //   if (userEmail) {
  //     db.collection('users')
  //       .doc(userEmail?.uid)
  //       .collection('orders')
  //       .orderBy('created', 'desc')
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [userEmail]);

  return (
    <div className='m-5 text-center text-[40px] font-bold p-[100px] text-green-600'>
      <h1>We have recieved your orders succesfuly.</h1>
      
    </div>
  );
};
export default Orders;
//   <div>
//         {orders.map((order) => (
//   <div key={order.id}>
//     <div>
//       {moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}
//     </div>
//     {order.data.products.map((product, index) => (
//       <div key={index}>
//         <img src={product.image_small} alt="Product" />
//         <img src={product.image} alt="Product" />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         {/* Render other product details */}
//       </div>
//     ))}
//   </div>
// ))}

//       </div> 