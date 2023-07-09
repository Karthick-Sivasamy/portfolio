import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomHeader = ({ children }) => {
  const RouteConfig = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'About',
      route: '/About',
    },
    {
      name: 'Works',
      route: '/Works',
    },
    {
      name: 'Education',
      route: '/Education',
    },
    {
      name: 'Contact',
      route: '/Contact',
    },
  ];
  return (
    <div className="h-[100vh]  w-full flex flex-col items-center justify-center">
      <div className="h-[8%] flex items-center w-full px-4 sm:px-24 lg:px-48 justify-between shadow-sm z-10">
        <NavLink
          className="text-3xl font-semibold tracking-wider cursor-pointer"
          to="/"
        >
          SK
        </NavLink>

        <div className="hidden  md:flex items-center gap-6 lg:gap-10 font-medium text-base">
          {RouteConfig.map((item, index) => (
            <NavLink
              to={item.route}
              key={index}
              className={({ isActive }) =>
                `${
                  isActive
                    ? 'text-blue-600 '
                    : 'text-black group transition duration-300'
                } `
              }
            >
              {item.name}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black  "></span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="h-[92%] w-full">{children}</div>
    </div>
  );
};

export default CustomHeader;
