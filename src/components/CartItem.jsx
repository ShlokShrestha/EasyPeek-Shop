import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartState } from "../context/CartContext";
const CartItem = ({ product }) => {
  const { id, image, title, price, qtn } = product;
  const { dispatch } = CartState();

  return (
    <div className="flex gap-x-2 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[70px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title.slice(0, 20)}
            </Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
                className="text-gray-500 hover:text-red-500"
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove
                  onClick={() => {
                    if (qtn > 1) {
                      dispatch({
                        type: "DECREMENT_ITEM",
                        payload: product,
                      });
                    } else {
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      });
                    }
                  }}
                />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {qtn}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd
                  onClick={() => {
                    dispatch({
                      type: "INCREMENT_ITEM",
                      payload: product,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              ${price.toFixed(0)}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              ${(price * qtn).toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
