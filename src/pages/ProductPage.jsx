import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Filter from "../components/Filter";
import Data from "../components/Data";
const ProductPage = () => {
  const { products } = useContext(ProductContext);
  const [productData, setProduct] = useState(Data);
  const filterButton = [
    "ALL",
    ...new Set(products.map((item) => item.category)),
  ];

  const handleFilter = (category) => {
    if (category === "ALL") {
      setProduct(products);
      return;
    }
    const updateProduct = products.filter((item) => item.category === category);
    setProduct(updateProduct);
  };
  return (
    <div className="my-16">
      <div className="text-3xl font-bold flex justify-center my-10 ">
        Product Page
      </div>
      <Filter filterButton={filterButton} handleFilter={handleFilter} />
      <div className=" container mx-auto ">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
          gap-[30px] max-w-sm  px-5 md:max-w-none md:mx-0 mx-auto py-2 
          "
        >
          {productData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
