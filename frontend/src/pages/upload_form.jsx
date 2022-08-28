import React from "react";
import RatingSystem from "./RatingSystem";
import DropDown from "./DropDownInput";

const form = () => {
  return (
    <div>
      <div className="container p-10 m-auto ">
        <div className="mb-6">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Item Name
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div className="flex">
          <div className="flex-1 pr-2">
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Item Age
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="flex-1 pl-2">
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>

        <div>
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Item Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <div className="flex md:flex-row flex-col py-5">
          <div className="mr-full my-auto">
            <DropDown />
          </div>
          <div className="md:ml-20 ml-full pb-5">
            <RatingSystem />
          </div>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for="user_avatar"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
          />
        </div>
        <div className="my-5 text-center">
          <button
            type="button"
            className="focus:outline-none mx-auto  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default form;