import React from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props) {
  return (
    <div className="wl-full pb-[1rem] text-sm font-medium text-gray-900 dark:text-white">
      <a
        href="#"
        aria-current="true"
        className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Profile
      </a>
      <a
        href="#"
        className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Settings
      </a>
      <a
        href="#"
        className="block py-2 px-4 w-full border-b cursor-pointer hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Messages
      </a>
      <a
        href="#"
        className="block py-2 px-4 w-full  cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >
        Download
      </a>
    </div>
  );
}

export default NavigationMenu;
