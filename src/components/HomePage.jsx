import React from 'react'
import { Header,Banner, Category, Hpcard, Products } from './'
const HomePage = () => {
  return (
    <div className='bg-amazonclone-background items-center justify-center min-w-[768px] mx-auto '>
      <div className=''>
        <Banner />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 -mt-80'>
          <Hpcard title={"We have a surprise for you"} image={'./amazon_clone/images/home_grid_1.jpg'} link={"see terms and conditions"} />
          <Hpcard title={"Watch The Rings of Power"} image={"./amazon_clone/images/home_grid_2.jpg"} link={"start streaming now"} />
          <Hpcard title={"Unlimited Streaming"} image={"./amazon_clone/images/home_grid_3.jpg"} link={"Find out more"} />
          <Hpcard title={"More to experiance"} image={"./amazon_clone/images/home_grid_4.jpg"} link={"Browse kindle unlimited"} />
          <Hpcard title={"Shop Pet Supplies"} image={"./amazon_clone/images/home_grid_5.jpg"} link={"see more"} />
          <Hpcard title={"Spring Sale"} image={"./amazon_clone/images/home_grid_6.jpg"} link={"see the deals"} />
          <Hpcard title={"Echo Buds"} image={"./amazon_clone/images/home_grid_7.jpg"} link={"see order"} />
          <Hpcard title={"Family Plan: 3 Months Free"} image={"./amazon_clone/images/home_grid_8.jpg"} link={"learn more"} />
          <div className='m-4 pt-11 bg-white h-[420px] xl:hidden'  >
            <img className=' h-[300px]   ' src={'./amazon_clone/images/banner_image_2.jpg'} alt="" />
          </div>
        </div>
        <Products/>
        <Category />
        <div className=' m-3 h-[240px]'>
          <img className='m-auto h-[100%]' src={"../amazon_clone/images/banner_image.jpg"} alt="" />
        </div>
      </div>
    </div>
  )
}
export default HomePage
