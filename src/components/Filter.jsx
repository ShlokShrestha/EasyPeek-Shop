import React, { useContext } from "react";

const Filter = ({ filterButton, handleFilter }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {filterButton.map((category, index) => {
        return (
          <button
            key={index}
            className="bg-green-500 hover:bg-green-600  text-white font-semibold py-2 px-4  mb-5 mx-2 uppercase"
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
