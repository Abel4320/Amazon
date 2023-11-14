import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from "swiper/modules";
import { Link} from 'react-router-dom'
import ProductPage from './ProductPage';

const Products = () => {
  return (
      <div >
       <div className=' bg-white m-2'>
           <div className='text-2xl font-semibold p-2'>Best Sellers</div>
       <Swiper slidesPerView={7}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}>
              {
          Array.from({ length:8}, (_, i) => <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img className="hover:scale-110 transition-transform w-[1000px]  p-3"src={`../amazon_clone/images/product_${i}_small.jpg`} alt="" />
            </Link>          
                  </SwiperSlide>)
              }
      </Swiper>
      </div>
      <div className=' bg-white m-2 '>
         <div className='text-2xl font-semibold p-2'>New Products</div>
        <Swiper slidesPerView={4}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}>
          {Array.from({ length: 14 }, (_, i) => {
            if (i >= 9) {
              return (
                <SwiperSlide key={i}>
                  <Link to={`/product/${i}`}>
                    <img className="hover:scale-110 w-[100%] transition-transform p-3 h-[100%]" src={`../amazon_clone/images/product_${i}_small.jpg`} alt="" />
                  </Link>
                </SwiperSlide>)
            }
            return null
          })}
       </Swiper>
      </div>
      
    </div>
    
  )
}

export default Products
