import React from 'react'
import ReactSlider from "react-slider";
import 'flowbite';
import { Accordion } from 'flowbite-react';
import { useState } from "react";
import data from "../components/message.json"
const image1 = require("../assets/img/icons8-age-100.png");
// const image2 = require("../assets/img/bg.webp");

const Listing = () => {

let x1=0,x2=0,x3=0,x4=0,x=0;

    const [currentValue, setCurrentValue] = useState(0);
    
    
        const [Data, setData] = useState(data);
        const filtertags=(val,b)=>{
            const res=data.filter((currentValue)=>{
                if(val!='all')
                return currentValue.list[0].item_tag===val;
                else
                return currentValue;
            });
            setData(res);
        }
    


    return (
        <>
            <div className="flex flex-col lg:flex-row bg-bg">
                {/* <div className=" bg-transparent lg:w-[95%]"> */}
                <div className="w-[] lg:w-[340px] bg-white mb-3 mt-3  mr-10 lg:mr-0 lg:ml-3 rounded-sm  block lg:sticky top-3 shadow-md shadow-gray-600 h-fit m-auto">
                    <Accordion alwaysOpen={true}>

                        <Accordion.Panel >

                            <Accordion.Title className=''>
                                Filters
                            </Accordion.Title>
                            <Accordion.Content >
                                <div className="xyz ">
                                    <div className="ml-3">
                                        <div className=" text-slate-600 text-[105%]"> Choose tag as per your buying needs</div>
                                        <div className="  gap-6 lg:block" >
                                            <div className="block my-1 "><input type="radio" id="Rent" name='tag' className="mr-2" onChange={()=>filtertags('all',!x1)} />all</div>
                                            <div className="block my-1"> <input type="radio" id="PG" name='tag' className="mr-2" onChange={()=>filtertags('other-stationary',!x)}/>other-stationary</div>
                                            <div className="block my-1"> <input type="radio" id="PG" name='tag' className="mr-2" onChange={()=>filtertags('sports',!x2)}/>sports</div>
                                            <div className="block my-1"> <input type="radio" id="Hostel" name='tag' className="mr-2" onChange={()=>filtertags('stationary',!x3)}/>stationary</div>
                                            <div className="block my-1"> <input type="radio" id="Buy" name='tag' className="mr-2" onChange={()=>filtertags('electronics',!x4)}/>electronics</div>
                                        </div>
                                    </div>
                                    {/* <div className="x mx-3 mt-3 text-slate-600 text-[105%]">Max Price: ₹30,000</div>
                                    <ReactSlider
                                        className="customSlider relative max-w-xs mx-3 |   "
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
                                    </div> */}
                                </div>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>
                {/* </div> */}

                {/* <div className="w-[340px] bg-white mb-3 mt-3 ml-3 rounded-sm hidden lg:block lg:sticky top-3 shadow-md shadow-gray-600 h-fit m-auto">


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

                </div> */}


                <div className=" before:hidden items-center justify-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-3 p-[1%] w-[100%] md:w-[90%] lg:w-[75%] sm:mx-0 md:mx-auto lg:mx-auto">

                {Data.map((dataa, key) => {
        return (
                    
                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl object-cover w-[280px] h-[300px]' src={dataa.list[0].item_immage} alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-purple-500 text-white  inline py-[1px] px-2">{dataa.list[0].item_tag}</div>
                                <div className="font-bold text-[140%] ml-[5%]">{dataa.list[0].item_name}</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹{dataa.list[0].item_price}</div>
                            <div className=" flex justify-between gap-[1%] text-gray-100 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">{dataa.list[0].item_age} Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>
        );})}
                    {/* <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/280x300/?television" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-pink-500 text-white  inline py-[1px] px-2">Electronics</div>
                                <div className="font-bold text-[140%]">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/280x300/?home" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-indigo-500 text-white  inline py-[1px] px-2">Furniture</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/280x300/?books" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-green-400 text-white  inline py-[1px] px-2">Books</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/280x300/?lamp" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-pink-500 text-white  inline py-[1px] px-2">Electronics</div>
                                <div className="font-bold text-[140%] ml-[5%]">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div>

                    <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <a href="https://www.sanfransentinel.com/renstly-1.html">
                            <img className=' rounded-tl-3xl rounded-br-3xl' src="https://source.unsplash.com/280x300/?football" alt="" />
                            <div className="my-[2%]">
                            <div className="rounded-md bg-slate-500 text-white  inline py-[1px] px-2">Utility</div>
                                <div className="font-bold text-[140%] ">Tennis Racket</div>
                            </div>
                            <div className="font-bold text-[140%] mb-[1%] ml-[5%]">₹6,000</div>
                            <div className=" flex gap-[1%] text-gray-600 ">
                                <div className="flex"> <img className="object-contain w-8 m-1" src={image1} alt="" /> <div className="self-center">2 Years</div></div>
                                <div className="flex"> <img className="object-contain w-8 m-1" src=" " alt="" /> <div className="self-center">Approved</div></div>
                            </div>
                        </a>
                    </div> */}
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