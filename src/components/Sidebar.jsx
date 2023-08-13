import React, { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../context/SidebarContext";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { CartState } from "../context/CartContext";

const Sidebar = () => {
  const {
    state: { cart },
    dispatch,
    total,
  } = CartState();
  const { isOpen, handleChange } = useContext(SidebarContext);

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            Shopping Cart({cart.length})
          </div>
          <div
            onClick={handleChange}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[520px]  overflow-y-auto overflow-x-hidden border-b">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="w-full flex justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>$ {Number(total).toFixed(2)}
            </div>
            <div
              className="cursor-pointer py-2 bg-green-500 text-white w-12 h-12 flex justify-center items-center text-xl"
              onClick={() => {
                dispatch({
                  type: "CLEAR_FROM_CART",
                  payload: cart,
                });
              }}
            >
              <FiTrash2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
