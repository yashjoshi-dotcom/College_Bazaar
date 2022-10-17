import React from "react";
import Section1_Img from "../assets/SVG/coffee.svg";
import Section2_Img from "../assets/SVG/order_done.svg";
import Section3_Img from "../assets/SVG/wishlist.svg";
import { Navigate, useNavigate } from "react-router-dom";
// import Road from "../assets/SVG/Paths.svg";
import circle_1 from "../assets/img/Circle_Img_1.png";
import circle_2 from "../assets/img/Circle_Img_2.png";
import circle_3 from "../assets/img/Circle_Img_3.png";
import circle_4 from "../assets/img/Circle_Img_4.png";

const LandingPage = () => {
  const navigate=useNavigate();
  return (
    <div>
      <div className=" flex flex-col-reverse bg-backSm_2 h-fit lg:h-[20rem] xl:h-[27rem] md:bg-backSm_1 lg:bg-backLg bg-no-repeat bg-slate-300  sm:flex-row  pb-[5%] sm:pb-0">
        <div className="px-[5%] md:h-[70vh] sm:mb-0 sm:p-[2%] sm:pl-[5%] sm:pr-[2%] w-[100vw]  sm:h-[50vh] mt-3 sm:mt-0 text-center ">
          <div className=" h-fit text-[170%] sm:text-[250%] md:text-[300%] font-bold mb-[2px] text-green-600 md:mt-[1rem] sm:h-[5rem]">
            Your College Needs At One Place
          </div>
          <div className="text-blue-900 mb-[2rem]">
            Connect with your mates to get items at cheaper price
          </div>
          <button onClick={()=>{navigate('/home')}}className=" rounded-md bg-blue-500 p-[1%] hover:bg-blue-600">
            Get Started For Free
          </button>
        </div>
        <div className="sm:flex flex-row w-[100%] sm:w-[0%] object-cover hidden">
          <div className="flex flex-col">
            <img
              className="text-green md:w-7/12 mb-10 mt-5 sm:w-10/12 invisible"
              src={Section1_Img}
              alt=""
            />
            <img
              className="text-green w-10/12 invisible"
              src={Section2_Img}
              alt=""
            />
          </div>
          <div className=" hidden">
            <img
              className="text-green w-10/12 mt-32 invisible"
              src={Section3_Img}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* <div className="w-[50%] bg-slate-200"></div> */}
        <div className=" lg:bg-circle bg-no-repeat w-[100%]">
          <div className="w-[100%] p-[2rem] bg-transparent md:bg-road bg-no-repeat bg-center bg-auto">
            <div className=" text-center font-bold text-[150%]">Roadmap</div>
            <div className=" mt-0 lg:mt-[5rem] ">
              <div className="flex my-3 md:mr-[58%] lg:mr-[48%] mt-3 md:mt-[5rem]">
                <div className=" self-center mr-[5%] text-right md:ml-[18%]">
                  <div className="text-green-400 font-bold text-[120%]">
                    STEP 01
                  </div>
                  <div className="text-semibold text-[120%]">
                    Find Your Spare Items
                  </div>
                  <div className=" text-xs text-slate-500">                  
                  Passing out from college and want to get rid of your items
                  like bicycle,stationary etc.Have some spare stationary and
                  books.
                </div>
                </div>
                <div className="">
                  <img
                    className=" rounded-full md:invisible"
                    src={circle_1}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse mb-2 md:pt-16 lg:pt-0   md:ml-[58%] lg:ml-[48%] ">
                <div className="md:pb-0 my-3 ml-[5%] md:mr-[18%] self-center">
                  <div className="text-blue-400 font-bold text-[120%]">
                    STEP 02
                  </div>
                  <div className="text-semibold text-[120%]">
                    Post On The Site Hassle Free.
                  </div>
                  <div className=" text-xs text-slate-500">
                    Collect all the basic details of the item that you want to
                    sell and fill in the same on the webpage with ease.
                  </div>
                </div>
                <div className="">
                  <img
                    className=" rounded-full md:invisible"
                    src={circle_2}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex mb-2 md:mr-[58%] mt- lg:mr-[48%]">
                <div className="md:pb-0 my-3 mr-[5%] text-right md:ml-[18%] self-center">
                  <div className="text-purple-400 font-bold text-[120%]">
                    STEP 03
                  </div>
                  <div className="text-semibold text-[120%]">
                    Chat With the Buyer with full Privacy
                  </div>
                  <div className=" text-xs text-slate-500">
                    Clear all the doubts by directly chattting with the buyer.
                    All this without worrying about giving away any personal
                    number as we have our chat feature built into the web app
                    itself.
                  </div>
                </div>
                <div className="">
                  <img
                    className=" rounded-full md:invisible"
                    src={circle_3}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-row-reverse mb-2  md:ml-[58%] lg:ml-[48%]">
                <div className=" md:pt-[2rem]  md:pb-[9rem] my-3 ml-[5%] md:mr-[18%]">
                  <div className="text-fuchsia-400 font-bold text-[120%]">
                    STEP 04
                  </div>
                  <div className="text-semibold text-[120%]">
                    Get the best price for your item.
                  </div>
                  <div className=" text-xs text-slate-500">
                    Show off your negotation skills and finalise the best deal
                    avialable to you. Do all this Stress Free as we allow only
                    your college mates to join this site.
                  </div>
                </div>
                <div className="">
                  <img
                    className=" rounded-full md:invisible"
                    src={circle_4}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
