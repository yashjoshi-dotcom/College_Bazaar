import React from 'react'
// import image from "../HouseData/assets/img/house-banner.png"

const image5 = require("../assets/img/search.ico");

const HeaderSearch = () => {
  return (
    <div class="">
      <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?home')] bg-cover  ">
        <div className="flex justify-center w-4/5">
          <input type="text" className="my-36 w-9/12  sm:h-20 rounded-l-xl px-4 outline-none " placeholder='Search flats here...' />
          <button className=' my-36 sm:h-20 w-20 rounded-l-none rounded-r-xl  px-4 bg-sky-600  border-0 hover:bg-sky-700'><img className=' object-contain py-2 w-10' src={image5} alt="" /></button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearch 