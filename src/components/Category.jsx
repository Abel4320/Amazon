import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,Autoplay} from "swiper/modules";

const Category = () => {
  return (
      <div className=' bg-white m-3 '>
          <div className='text-2xl font-semibold p-2'>Shop By Category</div>
          
      <Swiper slidesPerView={5}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}>
               <SwiperSlide>
                  <img  src={'../amazon_clone/images/category_0.jpg'} />
              </SwiperSlide>
              <SwiperSlide>
                  <img src={"../amazon_clone/images/category_1.jpg" }/>
              </SwiperSlide>
               <SwiperSlide>
                  <img src={"../amazon_clone/images/category_2.jpg"} />
              </SwiperSlide>
                <SwiperSlide>
                  <img src={"../amazon_clone/images/category_3.jpg"} />
              </SwiperSlide>
                <SwiperSlide>
                  <img src={"../amazon_clone/images/category_4.jpg"} />
              </SwiperSlide>
                <SwiperSlide>
                  <img src={"../amazon_clone/images/category_5.jpg"} />
              </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category
