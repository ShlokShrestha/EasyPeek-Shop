import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import { BsSearch } from "react-icons/bs";
const Home = () => {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const filterSearch = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <section>
        <div class="text-gray-600 body-font bg-slate-100">
          <div class="container mx-auto flex md:px-24 md:py-24 py-10 px-2 md:flex-row flex-col-reverse items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left my-4 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 uppercase">
                Discover & Shop
                <br class="hidden lg:inline-block uppercase" />
                The Trend
              </h1>
              <p class="mb-8 leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore accusamus repellendus, reiciendis est eligendi nisi!.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Shop Now
                </button>
              </div>
            </div>
            <div class=" lg:w-1/2 md:w-1/2 w-5/6">
              <img
                class="object-contain object-center rounded"
                alt="hero"
                src="/img/banner-img-1.jpg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between item-center mt-8 mb-4 lg:px-16 mx-5">
          <div className="text-3xl font-bold mx-auto lg:mx-0 md:mx-0 mb-4">
            Product Page
          </div>
          <div className="mx-auto lg:mx-0 md:mx-0 flex ">
            <input
              type="search"
              className="relative w-[200px] min-w-0 rounded-l border border-solid  px-3 py-[0.7rem] font-normal outline-none "
              placeholder="Enter the product title"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className=" rounded-1 bg-green-500 px-4 py-4">
              <BsSearch className="text-white text-md" />
            </div>
          </div>
        </div>
        <div className=" container mx-auto mb-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[20px] max-w-sm px-5 md:max-w-none md:mx-0 mx-auto py-2 
          "
          >
            {filterSearch.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
