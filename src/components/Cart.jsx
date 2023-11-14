import React from 'react'
import Subtotal from './Subtotal'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductBadge, ProductRating } from './'
import { US_CURRENCY } from '../utils/constant'
import { removeFromCart, decrementInCart, incrementInCart } from '../redux/cartSlice'
const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const items = useSelector((state) => state.cart.productsNumber)
  const subTotal = useSelector((state) => state.cart.products.reduce((subTotal, product) => subTotal + (product.price * product.quantity), 0))
  const dispatch = useDispatch()
  return (
    <div className=' bg-amazonclone-background h-full-screen mt-[10px] '>
      <div className='bg-white pl-2 font-bold text-xl'>Delivery adress : <span className='text-sm font-semibold'>Some where</span></div>
      <div className='bg-white pl-2 font-bold text-xl'>Phone no : <input placeholder='123-456-7890' className='text-sm font-semibold rounded bg-gray-200 border border-black pl-1'></input></div>
      <div className='flex bg-white justify-between '>
        <div className='p-6'>
          <div className='font-bold text-[18px] '>Hello,</div>
          <div className='font-bold text-[30px]'>This is your shooping Basket</div>
        </div>
        <div className='bg-amazonclone-background border border-gray-300 rounded  w-[400px] h-[160px] mr-3 mb-2 '>
          <Subtotal/>
        </div>
      </div>
       <div className=''>
          <div className=' text-2xl'>
              {
            products.map(product => {
              return (
                <div className='' key={product.id}>
                  <div className=' '>
                    <div className=' bg-white  ' >
                      <div className='flex  m-4 '>
                        <div className=''>
                        <Link to={`/product/${product.id}`}>
                          <img className='w-[150px]' src={`amazon_clone/images/product_${product.id}_small.jpg`} />
                        </Link>
                      </div>
                      <div className='ml-7'>
                        <div className=' font-medium text-lg text-black' >
                          <Link to={`/product/${product.id}`}>
                          <div className=''>{product.title}</div>
                          <div className=''>{product.brand}</div>
                          <div><ProductBadge badges={product.badge} /></div>
                          <div className='pt-3'><ProductRating ratings={product.ratings} avgRating={product.avgRating} /></div>
                        </Link>
                        </div>
                        <div>
                          <button className='text-sm font-semibold rounded text-blue-500 mb-5 ' onClick={()=>dispatch(removeFromCart(product.id))}>
                            Delete
                          </button>
                        </div>
                        <div className='flex gap-4 w-[100px] h-[30px] text-lg mb-4 bg-gray-200  '>
                          <button onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }  className=' bg-gray-400 w-[30px] pl-2 rounded font-bold '>-</button>
                          <div className=''>{product.quantity}</div>
                          <button   onClick={() =>
                              dispatch(incrementInCart(product.id))
                            } className='font-bold bg-gray-400 pl-2 w-[30px] rounded' >+</button>
                        </div>
                      </div>
                    <div  className="absolute left-[1000px] font-semibold">
                      <div> {US_CURRENCY.format(product.price*product.quantity)}</div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) 
          }
          <div className='text-right font-bold text-[25px] pr-[150px] bg-white p-4 '>
            Subtotal: ({items} items) <span>{US_CURRENCY.format(subTotal)}</span>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
