import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/CartContext";
const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { state, dispatch } = CartState();

  return (
    <div className=" shadow-lg">
      <div className="border border-[#e4e4e4] h-[300px] mb-2 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center item-center">
          <div className="w-[150px] mx-auto flex justify-center items-center">
            <Link to={`/product/${id}`}>
              <img
                className="mx-h-[100px] group-hover:scale-110 transition duration-300"
                src={image}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <div className="text-lg  font-semibold mb-1">
            {title.slice(0, 20) + "..."}
          </div>
        </Link>
        <div className="text-xl mb-1">&#8377; {price}</div>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          });
        }}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
