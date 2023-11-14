import React, { useEffect, useState } from 'react'

const Search = () => {
  return (
      <div className='flex '>
        <div className=''>
              <select className=' w-[50px] h-[41px] bg-slate-100 rounded-tl-lg rounded-bl-lg rounded-bl-lp-2 ' name="" id="">
                  <option value="">All</option>
                  <option value="">Amazon Devices</option>
                  <option value="">Fashion</option>
                  <option value="">Amazon</option>
                  <option value="">Computers</option>
                  <option value="">Home</option>
                  <option value="">Mobile</option>
                  <option value="">Beauty</option>
            </select>
          </div>
          <div className=''>
            <input className="  p-2  h-[41px]" style={{ width: '50vw' }} type="text" placeholder="Search Amazon" />
          </div>
          <div>
            <button className=" bg-orange-400 w-[39.9px] h-[41px] rounded-tr-lg rounded-br-lg"><img className='' src={"../amazon_clone/search.png"} alt="" /></button>
      </div>
     
    </div>
  )
}

export default Search
