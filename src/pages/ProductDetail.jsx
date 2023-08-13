import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartState } from "../context/CartContext";
import { AiFillStar } from "react-icons/ai";
const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productData = products.find((item) => item.id === parseInt(id));
  if (!productData) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading!!!
      </div>
    );
  }
  const { image, category, rating, description, title, price } = productData;
  return (
    <div className="pt-32 pb-12 px-7 md:py-8 lg:py-24 h-full flex items-center ">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div>
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left lg:ml-16 max-w-[450px]">
            <h1 className="text-[24px] text-gray-600 uppercase mt-5 font-medium mx-auto">
              {category}
            </h1>
            <h1 className="text-[28px] font-semibold mb-1 mx-auto">{title}</h1>
            <span className="text-[26px] font-semibold flex justify-center lg:justify-start ">
              Rating {rating.rate}
              <AiFillStar className="my-auto" />
            </span>
            <div className="text-5xl text-black font-bold my-4 ">${price}</div>
            <p className="mb-4 text-justify">{description}</p>
            <button
              className="bg-green-500 hover:bg-green-600 py-3 px-6 text-lg font-semibold text-white"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: productData,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
