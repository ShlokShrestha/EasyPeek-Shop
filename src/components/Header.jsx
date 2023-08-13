import React, { useContext, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CartState } from "../context/CartContext";
import { MdOutlineClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const { handleChange } = useContext(SidebarContext);
  const [mode, setMode] = useState(false);

  const {
    state: { cart },
  } = CartState();
  const [active, setActive] = useState("");
  return (
    <>
      <div
        className={`${
          mode ? "right-0" : "-right-full "
        } shadow-md w-full h-full sticky top-0 bg-white flex justify-between item-center py-4 px-3  lg:px-16 md:px-12 z-50`}
      >
        <Link to="/" className="text-xl font-semibold z-10">
          <div>
            <img
              src="/img/trendhub-icon.png"
              alt=""
              className={`${active === "home" ? "text-green-600" : ""} w-16 `}
              onClick={() => setActive("home")}
            />
          </div>
        </Link>

        <ul
          className={`mx-auto text-lg md:flex text-center mt-3 md:top-0 md:justify-center md: my-auto absolute left-0 w-full font-medium bg-white transition-all duration-1000 cursor-pointer z-1 ${
            mode ? "top-12" : "top-[-400px]"
          }`}
        >
          <li
            className={`${
              active === "home" ? "text-green-600" : ""
            } p-3 hover:text-green-600`}
          >
            <Link to="/" onClick={() => setActive("home")}>
              Home{" "}
            </Link>
          </li>
          <li
            className={`${
              active === "product" ? "text-green-600" : ""
            } p-3 hover:text-green-600`}
          >
            <Link to="/productpage" onClick={() => setActive("product")}>
              Product
            </Link>
          </li>

          <li
            className={`${
              active === "about" ? "text-green-600" : ""
            } p-3 hover:text-green-600`}
          >
            <Link to="/about" onClick={() => setActive("about")}>
              About
            </Link>
          </li>
          <li
            className={`${
              active === "contact" ? "text-green-600" : ""
            } p-3 hover:text-green-600`}
          >
            <Link to="/contact" onClick={() => setActive("contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex z-10">
          <div
            onClick={handleChange}
            className="cursor-pointer my-auto lg:pr-1 md:pr-2 pr-4"
          >
            <HiShoppingCart className="text-3xl " />
            <span
              className="absolute top-2 right-12  lg:right-14 md:right-11
             md:top-3 rounded-full bg-green-500 w-6 h-6 flex items-center justify-center text-white"
            >
              {cart.length}
            </span>
          </div>
          <div onClick={() => setMode(!mode)} className="my-auto ">
            {mode ? (
              <MdOutlineClose className="md:hidden text-3xl" />
            ) : (
              <HiMenuAlt3 className="md:hidden text-3xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
// flex relative
