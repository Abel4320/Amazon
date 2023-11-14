// import React, { useState } from 'react';


// const Checkout = () => {
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails({ ...paymentDetails, [name]: value });
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();
//     // Handle payment processing here
//     console.log('Payment details submitted:', paymentDetails);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//       <form onSubmit={handlePaymentSubmit}>
//         <div className="mb-4">
//           <label htmlFor="cardNumber" className="block text-gray-700 mb-2">
//             Card Number
//           </label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={paymentDetails.cardNumber}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="expirationDate" className="block text-gray-700 mb-2">
//             Expiration Date
//           </label>
//           <input
//             type="text"
//             id="expirationDate"
//             name="expirationDate"
//             value={paymentDetails.expirationDate}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="cvv" className="block text-gray-700 mb-2">
//             CVV
//           </label>
//           <input
//             type="text"
//             id="cvv"
//             name="cvv"
//             value={paymentDetails.cvv}
//             onChange={handleInputChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//           Submit Payment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Checkout;





