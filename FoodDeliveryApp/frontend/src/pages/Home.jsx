import React from "react";
import { assets } from "../assets/Assets";

const Home = () => {
  return (
    <div className="">
      <div className="ml-[1.7rem] mt-[1.7rem]">
        <img
          src={assets.food2}
          alt=""
          className="h-[29.5rem] w-[74rem] absolute"
        />
        <div className="relative w-[50rem] p-[5rem]">
          <h1 className="text-white text-5xl font-bold ">Introducing our latest Food collection</h1>
          <p className="text-white text-2xl mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti obcaecati ut dignissimos id, molestiae distinctio nulla quasi. Temporibus laudantium quam minus?</p>
          <button className="bg-white p-[5px] w-[10rem] font-semibold text-gray-600 mt-6">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
