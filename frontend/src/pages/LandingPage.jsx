import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse bg-slate-300  sm:flex-row  pb-[5%] sm:pb-0">
        <div className=" px-[5%] my-auto sm:mb-0 sm:p-[2%] sm:pl-[5%] sm:pr-[2%] w-[100%] sm:w-[50%] text-center  sm:text-left">
          <div className="text-[300%] font-bold mb-4 text-green-600 h-[30%]">
            Lorem ipsum dolor sit amet
          </div>
          <div className="text-blue-900 mb-[7%]">Lorem ipsum dolor sit.</div>
          <button className=" rounded-md bg-blue-500 p-[2%] hover:bg-blue-600">
            Lets Get Started
          </button>
        </div>
        <div className="w-[100%] sm:w-[50%] object-cover">
          <img
            className=""
            src="https://source.unsplash.com/1000x600/?sale"
            alt=""
          />
        </div>
      </div>

      <div className="flex">
        {/* <div className="w-[50%] bg-slate-200"></div> */}
        <div className="w-[100%] p-[2%] bg-slate-100">
          <div className=" text-center font-bold text-[150%]">Roadmap</div>
          <div className="mt-[5%]">
            <div className="flex mb-[4%] sm:mr-[44%]">
              <div className="m-auto mr-[5%] text-right sm:ml-[18%]">
                <div className="text-green-400 font-bold text-[120%]">
                  STEP 01
                </div>
                <div className="text-semibold text-[120%]">
                  Lorem, ipsum dolor.
                </div>
                <div className=" text-xs text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis voluptate ipsam maiores cupiditate, culpa ipsum quasi
                  amet odit doloribus commodi.
                </div>
              </div>
              <div className="">
                <img
                  className=" rounded-full"
                  src="https://source.unsplash.com/300x300/?logo"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-row-reverse mb-[4%] sm:ml-[44%]">
              <div className="m-auto ml-[5%] sm:mr-[18%] ">
                <div className="text-blue-400 font-bold text-[120%]">
                  STEP 02
                </div>
                <div className="text-semibold text-[120%]">
                  Lorem, ipsum dolor.
                </div>
                <div className=" text-xs text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis voluptate ipsam maiores cupiditate, culpa ipsum quasi
                  amet odit doloribus commodi.
                </div>
              </div>
              <div className="">
                <img
                  className=" rounded-full"
                  src="https://source.unsplash.com/300x300/?logo"
                  alt=""
                />
              </div>
            </div>

            <div className="flex mb-[4%] sm:mr-[44%]">
              <div className="m-auto mr-[5%] text-right sm:ml-[18%]">
                <div className="text-purple-400 font-bold text-[120%]">
                  STEP 03
                </div>
                <div className="text-semibold text-[120%]">
                  Lorem, ipsum dolor.
                </div>
                <div className=" text-xs text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis voluptate ipsam maiores cupiditate, culpa ipsum quasi
                  amet odit doloribus commodi.
                </div>
              </div>
              <div className="">
                <img
                  className=" rounded-full"
                  src="https://source.unsplash.com/300x300/?logo"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-row-reverse mb-[4%] sm:ml-[44%]">
              <div className="m-auto ml-[5%] sm:mr-[18%]">
                <div className="text-fuchsia-400 font-bold text-[120%]">
                  STEP 04
                </div>
                <div className="text-semibold text-[120%]">
                  Lorem, ipsum dolor.
                </div>
                <div className=" text-xs text-slate-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nobis voluptate ipsam maiores cupiditate, culpa ipsum quasi
                  amet odit doloribus commodi.
                </div>
              </div>
              <div className="">
                <img
                  className=" rounded-full"
                  src="https://source.unsplash.com/300x300/?logo"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
