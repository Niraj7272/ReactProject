import React from "react";
import { assets } from "../assets/Assets";

const Home = () => {
  return (
    <div className="">
      <div className="ml-[1.7rem] mt-[1.7rem] h-[100rem]">
        <div className="">
          <img
            src={assets.food2}
            alt=""
            className="h-[29.5rem] w-[74rem] absolute fixed"
          />
        </div>
        <div className="relative">
          <div className="p-[4rem]  w-[50rem]">
          <h1 className="text-white text-5xl font-bold">
            Introducing our latest Food collection
          </h1>
          <p className="text-white text-2xl mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            obcaecati ut dignissimos id, molestiae distinctio nulla quasi.
            Temporibus laudantium quam minus?
          </p>
          <button className="bg-white p-[5px] w-[10rem] font-semibold text-gray-600 mt-6">
            SHOP NOW
          </button>
          </div>
          <div className="bg-white mt-[10rem] w-full h-[40rem]">
            <p className="text-gray-600 flex justify-center pt-20">
             POPULAR DISES
            </p>
            <h1 className="text-black font-bold text-5xl flex justify-center mt-[0.7rem]">Trending Now</h1>
            <div className="flex gap-8 mt-20">
              <img src={assets.burger} alt="" />
              <img src={assets.momo} alt="" />
              <img src={assets.piza} alt="" />
              <img src={assets.pesty} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
