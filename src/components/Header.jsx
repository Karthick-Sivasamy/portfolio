import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="h-[100vh] w-full flex flex-col">
      <div className="h-[10%] hidden w-full md:flex justify-between px-8 md:px-16 items-center border-b-[1px] border-black bg-black text-white">
        <div>
          <NavLink
            to="/"
            className="text-5xl font-extrabold tracking-widest  group hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#cd001f] via-[#009e25] to-[#014e85] "
          >
            SK
            <span className=" block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-[#cd001f] via-[#009e25] to-[#014e85] "></span>
          </NavLink>
          <input type="checkbox" onChange={(e) => console.log(e)} />
        </div>
        <div className="flex  gap-16 items-center ">
          {['About', 'Services', 'Works', 'Contact'].map((item, index) => (
            <NavLink
              to={`/${item}`}
              //   className="group transition duration-300  text-lg lg:text-xl font-extrabold font-broad   hover:scale-110"
              className={({ isActive }) =>
                `${
                  isActive ? ' text-yellow-300' : 'text-white'
                } group transition duration-300  text-lg lg:text-xl font-extrabold font-broad   hover:scale-110`
              }
            >
              {item}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white  "></span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="h-[90%] w-full overflow-y-auto ">{children}</div>
    </div>
  );
};

export default Header;
