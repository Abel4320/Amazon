import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './fire';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../redux/cartSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.cart.email);
  const cart = useSelector((state) => state.cart.productsNumber);

  const handleSignOut = () => {
    if (userEmail) {
      auth
        .signOut()
        .then(() => {
          // Sign-out successful
          dispatch(signOutUser());
          console.log('User signed out successfully');
        })
        .catch((error) => {
          // An error occurred
          console.error('Error signing out:', error);
        });
    }
  };

  return (
    <div className=''>
      <header className='bg-amazonclone h-[60px]  m-auto space-x-4 pl-6 pt-2 flex  min-w-[768px]'>
        {/* Logo */}
        <div className='box border border-transparent hover:border-white pl-2 mb-2 md:mb-0'>
          <div className='w-[80px] p-1 search-container'>
            <Link to={'/'}>
              <img className='  pt-2' src="../amazon_clone/images/amazon.png" alt="" />
            </Link>
          </div>
        </div>

        {/* Location */}
        <div className='box border border-transparent hover:border-white mb-2 md:mb-0'>
          <div className='text-white font-bold text-sm pt-2 '>
            <div>Deliver to You Location</div>
            <div>Choose Location </div>
          </div>
        </div>

        {/* Search */}
        <div className='pr-7'>
          <Search />
        </div>

        {/* User Info and Cart */}
        <div className='flex w-full md:w-auto space-x-9'>
          <div className='text-white box border border-transparent hover:border-white'>
            <div className='pt-2 pl-3 font-bold'>
              <Link to={!userEmail && "/signin"}>
                <div onClick={handleSignOut}>
                  <div className='text-xs'>Hello,{userEmail ? userEmail : "Guest"}</div>
                  <span className='text-sm text-yellow-500 box border border-transparent hover:border-white w-[120px]'>
                    {userEmail ? "SignOut" : "Sign in"}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className='text-white md:ml-2 font-bold text-sm box border border-transparent hover:border-white'>
            <div className='pt-2 pl-3'>
              <div className='text-xs'>Returns</div>
              <div>&Orders</div>
            </div>
          </div>

          <div className='text-white ml-2 font-bold text-sm box border border-transparent hover:border-white'>
            <Link className='flex' to={"/cart"}>
              <ShoppingCartIcon className='h-[45px]' />
              <div className='relative'>
                <div className='absolute right-[9px] font-bold m-2 text-orange-400'>{cart}</div>
              </div>
              <div className='text-xs xl:text-sm font-bold pt-6'>Cart</div>
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation Links */}
      <div className='text-white flex space-x-4 p-2 m-auto bg-slate-800 flex-wrap   min-w-[1000px] '>
        {/* Dropdown */}
        <div className='relative box border border-transparent hover:border-white mb-2 md:mb-0'>
          <select className='bg-transparent' name='' id=''>
            <option className='text-black' value=''>
              One Medical
            </option>
            <option className='text-black' value=''>
              Pharmacy
            </option>
            <option className='text-black' value=''>
              Clinic
            </option>
            <option className='text-black' value=''>
              Health care
            </option>
          </select>
        </div>
         <div className='  box border border-transparent hover:border-white'>Best Seller</div>
          <div className=' box border border-transparent hover:border-white'>Amazon Basics</div>
          <div className=' box border border-transparent hover:border-white'>
            <select className='bg-transparent' name="" id="">
              <option className='text-black' value="">Prime</option>
              <option className='text-black' value="">Music</option>
              <option className='text-black' value="">Movies</option>
            </select>
          </div>
          <div className=' box border border-transparent hover:border-white '>Help Center</div>
          <div className=' box border border-transparent hover:border-white'>New Releases</div>
          <div className=' box border border-transparent hover:border-white'>Music</div>
          <div className=' box border border-transparent hover:border-white'>Todays Deals</div>
          <div className=' box border border-transparent hover:border-white'>Books</div>
          <div className=' box border border-transparent hover:border-white'>Registry</div>
          <div className=' box border border-transparent hover:border-white'>Fasion</div>
          <div className=' box border border-transparent hover:border-white'>Amazon Home</div>
      </div>
    </div>
  );
};

export default Header;
