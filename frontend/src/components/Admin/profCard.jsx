import React from "react";
import bag from "../../assets/img/handbag.jpg";

function AdminCards(props) {
  return (
    <div className="mx-auto my-5">
      <a
        className="flex flex-col items-center bg-white bg-opacity-30 rounded-lg border shadow-md md:flex-row md:max-w-5xl sm:max-w-lg hover:bg-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.productImage}
          alt=""
        />

        <div className="lg:w-[50rem] md:w-[30rem] flex flex-col  p-4 leading-normal ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {props.productName}
          </h5>
          <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">
            {props.productInfo}
          </p>
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
