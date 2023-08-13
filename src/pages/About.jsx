import React from "react";

const About = () => {
  return (
    <div className="h-full md:w-2/3 w-full px-5 mx-auto md:py-8 lg:py-24 flex items-center my-10">
      <div className="flex flex-col lg:flex-row">
        <div className="md:w-[400px] w-[250px] mx-auto ">
          <img src="/img/about.jpg" alt="abc" />
        </div>
        <div className="md:px-9 lg:w-2/3 mx-auto my-5">
          <div className="text-2xl font-semibol  text-gray-600 ">About Us</div>
          <div className="text-3xl font-semibold text-green-500">Our Shop</div>
          <hr class="h-[2px] my-4 w-32 border-0 bg-gray-400"></hr>
          <div className="text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            dolorem odit voluptas obcaecati sit sunt, voluptatibus voluptatem
            expedita quam laborum autem architecto quaerat illo, nostrum totam
            repellendus debitis ut. Necessitatibus sint natus nemo odio quod eum
            rerum facere perspiciatis praesentium harum saepe ipsa quaerat nihil
            voluptates eos, voluptatibus eligendi ratione! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veritatis facilis atque magnam
            alias, laborum numquam quibusdam sequi quam praesentium dolor?
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
