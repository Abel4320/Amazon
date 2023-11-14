import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { US_CURRENCY } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { auth } from './fire';

const Subtotal = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.productsNumber);
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
  );

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in, update the 'user' state.
        setUser(authUser);
      } else {
        // User is signed out, set 'user' state to null.
        setUser(null);
      }
    });
    return () => {
      // Clean up the subscription when the component unmounts.
      unsubscribe();
    };
  }, []);

  const handleProceedToCheckout = () => {
    if (user) {
      // If a user is logged in, proceed to the payment page.
      navigate('/payment');
    } else {
      // If no user is logged in, redirect to the sign-in page.
      navigate('/signin');
    }
  };
  return (
    <div>
      <div className="ml-7 mt-5">
        <div className="font-semibold">
          Subtotal ({items} items): <span>{US_CURRENCY.format(subTotal)}</span>
        </div>
        <div>
          <input type="checkbox" className="form-checkbox w-5 text-green-500" />
          This order Contains a Gift
        </div>
        <div className="pt-9 mr-6">
          <button
            onClick={handleProceedToCheckout}
            className="bg-yellow-500 h-[30px] border border-black rounded w-[100%] hover:bg-yellow-600"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subtotal;
