import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { US_CURRENCY } from '../utils/constant'
import { useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import instant from './axios';
import { resetCart } from "../redux/cartSlice";
import { db } from './fire'

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    const userEmail = useSelector((state) => state.cart.email);
  const subTotal = useSelector((state) => state.cart.products.reduce((subTotal, product) => subTotal + (product.price * product.quantity), 0))
  const products = useSelector((state) => state.cart.products)
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [succesfull, setSuccesfull] = useState(false);
  const [processing, setProcessing] = useState();
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNo, setCardNo] = useState('');
  const [clientSecret, setClientSecret] = useState(true)
useEffect(() => {
  const getClientSecret = async () => {
    try {
      const response = await instant.post(`/payments/create`);
      if (response && response.data && response.data.clientSecret) {
        setClientSecret(response.data.clientSecret);
        console.log('Client secret response:', response.data.clientSecret);
      } else {
        console.error('Invalid response:', response);
      }
    } catch (error) {
      console.error('Error getting client secret:', error);
      console.log('Full error:', error);
    }
  };
  getClientSecret();
}, [subTotal]);


 
  console.log('the clinet secret is', clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }).then(({ paymentIntent }) => {
        // paymentIntent=payment confirmation
        db.collection('users').doc(userEmail?.id).collection('orders').doc(paymentIntent.id).set({
          products: products,
          amount: paymentIntent.amount,
          created:paymentIntent.created,
      })
        setSuccesfull(true)
        setError(null)
        setProcessing(false)
        navigate("/orders")
        dispatch(resetCart());


      });
  }
    const handleCardNumberChange = (event) => {
        setDisabled(event.empty)  
        setError(event.error?event.error.message:'')
    }
//   const handleExpiryDateChange = (event) => {
//     setExpiryDate(event.target.value);
//   };
  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };
//   const handleCVCChange = (event) => {
//     setCVC(event.target.value);
  //   };
  
  return (
    <div className="max-w-[1000px] mx-auto m-3 p-6 bg-amazonclone-background rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 ">Payment Details</h2>
          <form action="
          " onSubmit={handleSubmit}>
              <div className="mb-4">
              <label className="block mb-1">Card Number</label>
      <div className='box border border-transparent border-white bg-white h-[40px] p-2'>
                 <CardElement  onChange={handleCardNumberChange}/>  
        </div>   
        {/* <input
          type="text"
          className="w-full px-3 py-2 border border-gray-100 rounded"
          placeholder="1234 5678 9101 1121"
          value={cardNumber}
        /> */}
      </div>
      {/* <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-1">Expiry Date</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-1">CVC</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            placeholder="123"
            value={cvc}
            onChange={handleCVCChange}
          />
        </div>
      </div> */}
      <div className="mb-4">
        <label className="block mb-1">Card Holder Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="John Doe"
          value={cardHolderName}
          onChange={handleCardHolderNameChange}
        />
      </div>
      <div className="flex justify-between">
        <img src="https://e7.pngegg.com/pngimages/148/696/png-clipart-logo-black-and-white-payment-paypal-brand-visa-card-white-text.png" className="w-[120px]" />
      </div>
    <button disabled={processing||disabled||succesfull} className="mt-6 bg-yellow-500 text-black p-3 m-4 rounded w-[900px] border border-black hover:bg-yellow-600">
        <span>  {processing ? <p className='font-semibold'>Payment Processing.....</p> : `Pay Now ${US_CURRENCY.format(subTotal)}`}</span>
              </button>
              <div>{error && <div className='text-red-500'>{error}</div>}</div>
          </form>
    </div>
  );
};
export default Payment;