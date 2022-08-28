import React from 'react'
import ReactSlider from "react-slider";

import { useState } from "react";
const image1 = require("../assets/img/icons8-age-100.png");


const Listing = () => {

    const [currentValue, setCurrentValue] = useState(0);
    return (
        <>
            <div className="flex bg-gradient-to-r from-sky-500 to-indigo-500">
                <div className="w-[340px] bg-white mb-3 mt-3 ml-3 rounded-sm sticky top-3 shadow-md shadow-gray-600 h-fit">


                    <div className="xyz mt-3">
                        <div className="ml-3">
                            <div className=" text-slate-600 text-[105%]"> Choose as per your accomodation needs</div>
                            <div className=" flex-wrap " >
                                <div className="block my-1 "><input type="checkbox" id="Rent" className="mr-2" Rent />Rent</div>
                                <div className="block my-1"> <input type="checkbox" id="PG" className="mr-2" />PG</div>
                                <div className="block my-1"> <input type="checkbox" id="Hostel" className="mr-2" />Hostel</div>
                                <div className="block my-1"> <input type="checkbox" id="Buy" className="mr-2" />Buy</div>
                            </div>
                        </div>
                        <div className="x mx-3 mt-3 text-slate-600 text-[105%]">Max Price: ₹30,000</div>
                        <ReactSlider
                            className="customSlider relative max-w-xs m-auto |   "
                            thumbClassName=" customSlider-thumb cursor-pointer w-5 h-5 bg-white border-yellow-400 border-2 rounded-full outline-none  hover: shadow-sm"
                            trackClassName="customSlider-track top-2 h-1 bg-yellow-400 "
                            markClassName="customSlider-mark cursor-pointer top-1.5 w-{1.5px} h-2 bg-slate-600 text-black"
                            marks={20}
                            min={0}
                            max={100}
                            defaultValue={0}
                            value={currentValue}
                            onChange={(value) => setCurrentValue(value)}
                            renderMark={(props) => {
                                if (props.key < currentValue) {
                                    props.className = "customSlider-mark customSlider-mark-before bg-rose-500 text-black";
                                } else if (props.key === currentValue) {
                                    props.className = "customSlider-mark customSlider-mark-active hidden";
                                }
                                return <span {...props} />;
                            }}
                        />

                        <div className="mx-3 mt-7">
                            <div className=" text-slate-600 text-[105%] mb-2">Choose Apartment Type</div>
                            <div className="flex-wrap">
                                <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1 RK</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1 BHK</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">2 BHK</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">3 BHK</button>
                                <button className="p-2 rounded-sm bg-yellow-300 border-0 text-slate-600 mr-2 mb-2 text-sm">4+ BHK</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4 BHK</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4+ BHK</button>
                            </div>
                        </div>

                        <div className=" text-slate-600 text-[105%] mb-2 mx-3 mt-3">Photos</div>
                        <div className="block  mx-3 "><input type="checkbox" id="Rent" className="mr-2" Rent />Show Only With Photos</div>

                        <div className="mx-3 mt-3">
                            <div className=" text-slate-600 text-[105%] mb-2">Floor</div>
                            <div className="flex-wrap">
                                <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">Ground</button>
                                <button className=" p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">1st</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">2nd</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">3rd</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">4th</button>
                                <button className="p-2 rounded-sm bg-yellow-300 border-0 text-slate-600 mr-2 mb-2 text-sm">4th</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">5th & above</button>
                                <button className="p-2 rounded-sm bg-slate-100 border-0 text-slate-600 mr-2 mb-2 hover:bg-slate-200 text-sm">Custom</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className=" flex justify-center flex-wrap p-[1%] w-[75%]">

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years old</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%]">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%] ml-[5%]">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-[1%]">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/250x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-full bg-blue-500 text-white  inline px-2">sports</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className=" pt-3  stock-container grid grid-cols-3 gap-3 w-4/5 object-center pl-10 pb-3 ">
      {
       
          
          <Card className="shadow-md shadow-gray-500  bg-white bg-opacity-40 rounded-md p-2 transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300" key ={data.id} style={{ width: '18rem' }}>
            <Card.Link  href="https://www.sanfransentinel.com/renstly-1.html">
          <Card.Img variant="top" src={data.image} />
          <Card.Body className="my-2">
            <Card.Title className="rounded-full bg-blue-500 text-white  inline px-2">{data.name}</Card.Title>
            <Card.Text className="font-bold h-11">
              {data.address}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush flex gap-5 text-gray-600 ">
            <ListGroup.Item className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">{data.bedrooms} Bedrooms</div></ListGroup.Item>
            <ListGroup.Item className="flex"> <img className="object-contain w-8 m-1" src={image2} alt="" /> <div className="self-center">{data.surface}</div></ListGroup.Item>
          </ListGroup>
          <ListGroup.Item className="font-bold text-xl ml-2">₹{data.price}</ListGroup.Item>
          
        </Card.Link>
        </Card>
    
        
      }
    </div> */}
            </div>
        </>
    )
}

export default Listing