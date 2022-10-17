import React from "react";
import "flowbite";
import { Accordion } from "flowbite-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import data from "../components/message.json";
import KnowMore from "./KnowMore";
import { ClassNames } from "@emotion/react";
const image1 = require("../assets/img/icons8-age-100.png");
const image2 = require("../assets/img/icons8-rating-100.png");
const image5 = require("../assets/img/search.ico");

const Listing = () => {
  const navigate = useNavigate();
  let x1 = 0,
    x2 = 0,
    x3 = 0,
    x4 = 0,
    x5 = 0,
    x6 = 0,
    x = 0;

  const [Data, setData] = useState();
  const [dat, setdat] = useState();

  const [isFetching, setIsFetching] = useState(true);

  const CallAboutPage = async () => {
    setIsFetching(true);
    console.log("Call about");
    try {
      console.log("tried");
      const res = await fetch("/db", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const object = await res.json();
      //    setUserData(object);
      console.log(object);
      filterr(object);
      // setData(object);
      // setdat(object);
      // console.log(Data);
      setIsFetching(false);
      if (!res.status === 201) {
        const error = new Error(res.error);
        alert(
          "There seems to be some issue with your credentials. We are working on it."
        );
        throw error;
      }
    } catch (err) {
      console.log(err);
      console.log("caught error");
      setIsFetching(false);
    }
  };

  // const searchtags = (e) => {
  //   // CallAboutPage();
  //   const ress = Data.filter((currentValue) => {
  //     currentValue.list = currentValue.list.filter((currentVal) => {
  //       console.log(currentVal.item_name);
  //       console.log(e.target.value);
  //       console.log("space")
  //       if (currentVal.item_name === undefined) {

  //       }
  //       else {
  //         return currentVal.item_name.toLowerCase().includes(e.target.value);
  //       }
  //     });
  //     return currentValue.list.length !== 0;
  //   });
  //   setdat(ress);
  //   console.log(ress);
  // };

  const searchtags = (e) => {
    console.log(dat);
    console.log(Data);
    const ress = Data.map((element) => {
      return {
        ...element,
        list: element.list.filter((currentVal) => {
          if (currentVal.item_name === undefined) {
          } else {
            return currentVal.item_name.toLowerCase().includes(e.target.value);
          }
        }),
      };
    });
    setdat(ress);
    console.log(ress);
  };

  // const filtertags = (val, b) => {
  //   // CallAboutPage();
  //   console.log(Data);
  //   console.log(dat);
  //   const res = Data.filter((currentValue) => {
  //     currentValue.list = currentValue.list.filter((currentVal) => {
  //       console.log(currentVal.item_tag);
  //       console.log(val);
  //       console.log("space");
  //       if (val === "") return currentVal;
  //       else return currentVal.item_tag === val;
  //     });
  //     return currentValue.list.length !== 0;
  //   });
  //   setdat(res);
  //   console.log(res);
  //   console.log(dat);
  // };

  const filtertags = (val, b) => {
    console.log(dat);
    console.log(Data);
    const res = Data.map((element) => {
      return {
        ...element,
        list: element.list.filter((currentVal) => {
          if (val === "") return currentVal;
          else return currentVal.item_tag === val;
        }),
      };
    });
    setdat(res);
    console.log(res);
  };

  const filterr = (object) => {
    const res = object.filter((currentValue) => {
      // if (val === "") return currentValue;
      return currentValue.list.length !== 0;
    });
    setData(res);
    setdat(res);
    console.log(res);
  };

  useEffect(() => {
    CallAboutPage();
  }, []);

  if (isFetching) {
    return <h1>Page is Loading</h1>;
  } else {
    return (
      <>
        <div class="">
          <div className="  flex justify-center  bg-[url('https://source.unsplash.com/1600x400/?home')] bg-cover  ">
            <div className="flex justify-center w-4/5">
              <input
                type="text"
                className="my-36 w-9/12  sm:h-20 rounded-l-xl px-4 outline-none "
                placeholder="Search here..."
                onChange={(e) => searchtags(e)}
              />
              <button className=" my-36 sm:h-20 w-20 rounded-l-none rounded-r-xl  px-4 bg-sky-600  border-0 hover:bg-sky-700">
                <img
                  className=" object-contain py-2 w-10"
                  src={image5}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-bg">
          {/* <div className=" bg-transparent lg:w-[95%]"> */}
          <div className="w-[] lg:w-[340px] bg-white mb-3 mt-3  mr-10 lg:mr-0 lg:ml-3 rounded-sm  block lg:sticky top-3 shadow-md shadow-gray-600 h-fit m-auto">
            <Accordion alwaysOpen={true}>
              <Accordion.Panel>
                <Accordion.Title className="">Filters</Accordion.Title>
                <Accordion.Content>
                  <div className="xyz ">
                    <div className="ml-3">
                      <div className=" text-slate-600 text-[105%]">
                        {" "}
                        Choose tag as per your buying needs
                      </div>
                      <div className="  gap-6 lg:block">
                        <div className="block my-1 ">
                          <input
                            type="radio"
                            id="Rent"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("", !x1)}
                          />
                          All
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="PG"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("Stationary", !x)}
                          />
                          Stationary
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="PG"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("Sports", !x2)}
                          />
                          Sports
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="Hostel"
                            name="tag"
                            className="mr-2"
                            onChange={() =>
                              filtertags("Clothing_essentials", !x3)
                            }
                          />
                          Clothing_essentials
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="Buy"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("Daily-use", !x4)}
                          />
                          Daily-use
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="Buy"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("Books", !x5)}
                          />
                          Books
                        </div>
                        <div className="block my-1">
                          {" "}
                          <input
                            type="radio"
                            id="Buy"
                            name="tag"
                            className="mr-2"
                            onChange={() => filtertags("Others", !x6)}
                          />
                          Others
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <div className=" before:hidden items-center justify-items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-3 p-[1%] w-[100%] md:w-[90%] lg:w-[75%] sm:mx-0 md:mx-auto lg:mx-auto">
            {dat.map((dataa) => {
              return (
                <>
                  {dataa.list.map((listt) => {
                    return (
                      <div className=" bg-white shadow-grey-500 bg-opacity-40 rounded-md p-[1%] transition-ease-in-out duration-500 border border-slate-200 hover:shadow-2xl hover:shadow-gray-300 m-auto mb-3">
                        <button
                          className=" text-left"
                          onClick={() => {
                            navigate("/knowmore", {
                              state: { item_id: listt._id },
                            });
                          }}
                        >
                          <img
                            className=" rounded-tl-3xl rounded-br-3xl object-cover w-[280px] h-[300px]"
                            src={listt.item_immage}
                            alt=""
                          />
                          <div className="my-[2%]">
                            <div className="rounded-md bg-yellow-400 text-white  inline py-[1px] px-2 ml-[1%]">
                              {listt.item_tag}
                            </div>
                            <div className="font-bold text-[140%] ml-[5%] text-gray-900">
                              {listt.item_name}
                            </div>
                          </div>
                          <div className="font-bold text-[120%] mb-[1%] ml-[5%]">
                            ₹{listt.item_price}
                          </div>
                          <div className=" flex justify-between gap-[1%] text-gray-100 ">
                            <div className="flex">
                              {" "}
                              <img
                                className="object-contain w-8 m-1"
                                src={image1}
                                alt=""
                              />{" "}
                              <div className="self-center">
                                {listt.item_age} Months
                              </div>
                            </div>
                            <div className="flex">
                              {" "}
                              <img
                                className="object-contain w-8 m-1"
                                src={image2}
                                alt=""
                              />{" "}
                              <div className="self-center">
                                {listt.item_condition} Star Condition
                              </div>
                            </div>
                          </div>
                        </button>
                        <Routes>
                          <Route
                            path="/knowmore"
                            element={<KnowMore a={listt._id} />}
                          />
                        </Routes>
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Listing;
