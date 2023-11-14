import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { callApi } from '../utils/Apicall'
import { useDispatch } from 'react-redux'
import { ProductBadge, ProductRating } from './'
import { US_CURRENCY } from '../utils/constant'
import {addToCart} from '../redux/cartSlice'

const ProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState("1");
    const getProduct = () => {
        callApi(`amazon_clone/data/products.json`).then((productResults) => {
            setProduct(productResults[id])
        })
    }
    const addQuantityToProduct = () => {
        setProduct(product.quantity = quantity);
        return product;
    }
    
    useEffect(() => {
        getProduct()
    }, [])
    
    if (!product?.title) return
    <h1>Loding Product</h1> 
  return ( product &&
      <div className='h-screen bg-amazonclone-background '>
          <div className=' '>
              <div className='grid grid-cols-10 gap-2 p-4'>
                  {/* left */}
                  <div className='col-span-3 p-7 rounded bg-white '>
                     <img className='h-[380px] w-[300px] m-auto' src={`${product.image}`} />
                  </div >
                  {/* middle */}
                  <div className="col-span-5 bg-white divide-y divide-gray-400 p-4">
                      <div className='mb-3 font-semibold'>
                          <div className='text-xl font-medium mb-2'>{product.title}</div>
                          <div className='text-lg  mb-2'>{product.brand}</div>
                     {product.ratings && (
                  <div className='text-sm mb-2'>
                    <ProductRating ratings={product.ratings} avgRating={product.avgRating} />
                  </div> 
                          )}
                          <div className='text-sm font-medium mb-2'>{product.attribute}</div>
                          <div><ProductBadge badges={product.badge}/></div>
                      </div>
                      <div className='text-base mt-3 '>
                        {product.description}  
                      </div>
                  </div>
                  {/* right */}
                  <div className="col-span-2 bg-white pl-2 pr-2 pt-3">
                      <div className='text-xl font-semibold text-red-700 text-right mr-3 '>Price:{US_CURRENCY.format(product.price)}</div>
                      <div className='text-lg font-semibold text-gray-500 text-right mr-3 '>Old Price: <span className='line-through'>{US_CURRENCY.format(product.oldPrice)}</span></div>
                      <div className='text-base font-semibold text-blue-500 mt-3 '>Free Returns</div>
                      <div className='text- sm font-semibold text-blue-500 mt-1'>Free Delivery</div>
                      <div className='text-base font-semibold text-green-700 mt-1 '>In stock</div>
                      <div className='text-base'>Quantity:
                          <select onChange={(e) => setQuantity(e.target.value)} className='p-2 ml-2 bg-white border rounded-lg focus:border-indigo-600'>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          </select>
                      
                      </div>
                      <Link to="/cart">
                            <button className='bg-yellow-400 w-full p-2 mt-2  text-sm font-semibold rounded hover:bg-yellow-500 'onClick={()=>dispatch(addToCart(addQuantityToProduct()))}>Add to Cart</button>
                      </Link>
                    
                  </div>
              </div>
              
          </div>
      </div>

  )
}

export default ProductPage
