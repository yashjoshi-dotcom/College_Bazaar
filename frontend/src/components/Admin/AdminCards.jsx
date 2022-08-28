import React from "react";
import bag from "../../assets/img/handbag.jpg";

function AdminCards(props) {
  return (
    <div className="mx-auto my-5">
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl sm:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.productImage}
          alt=""
        />

        <div className="lg:w-[50rem] md:w-[30rem] flex flex-col  p-4 leading-normal ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.productName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.productInfo}
          </p>
        </div>
        <div className="flex md:flex-col sm:flex-row">
          <button
            type="button"
            className="text-white  bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 sm:mx-6"
          >
            Approve
          </button>
          <button
            type="button"
            className="text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 sm:mx-6"
          >
            Delete
          </button>
          <button
            type="button"
            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:mx-6"
          >
            Report
          </button>
        </div>
      </a>
    </div>
  );
}

AdminCards.defaultProps = {
  productImage: bag,
  productName: "Product ABC XYZ",
  productInfo:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus facere, animi veniam, iure dignissimos officiis fugiat, aliquam a laboriosam voluptatem nulla natus. Placeat tenetur commodi fugiat quia, magni cum quos.",
};

export default AdminCards;
