import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/Assets";

const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);
   const inputRef = useRef(null);

    useEffect(() => {
    if (showSearch) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 shadow-md h-[3.5rem]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-12 font-medium text-gray-800">
          {["Home", "Menu", "Mobile App", "Contact Us"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Search Input */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Search food..."
        className={`absolute right-45 w-56 px-4 py-2 text-sm rounded-full border border-gray-500 outline-none transition-all duration-300
          ${showSearch ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
        `}
      />
          
          {/* Search */}
          <button onClick={() => setShowSearch(!showSearch)}>
          <img
            src={assets.searchicon}
            alt="Search"
            className="h-6 cursor-pointer hover:scale-110 transition"
          />
          </button>

          {/* Cart */}
          <div className="relative cursor-pointer">
            <img
              src={assets.basketicon}
              alt="Cart"
              className="h-6 hover:scale-110 transition"
            />
            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              5
            </span>
          </div>

          {/* Sign In */}
          <button className=" text-sm w-20 h-[2rem] font-semibold text-gray-600 border border-red-500 rounded-full hover:bg-gray-200 hover:text-red-400 transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
