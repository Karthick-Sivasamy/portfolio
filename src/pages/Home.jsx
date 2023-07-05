import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <Header>
      <div className="h-full w-full bg-yellow-300 text-black flex items-center justify-center ">
        <div className=" border-r-2 border-black  text-right h-[80%] w-[65%] grid grid-cols-3  px-12 place-items-center">
          <span className="text-4xl font-semibold">Hi, I'm</span>
          <div className="flex justify-evenly w-full">
            <p className="font-broad text-5xl font-extrabold uppercase flex flex-col h-full items-center gap-2">
              {['K', 'a', 'r', 't', 'h', 'i', 'c', 'k', ' '].map(
                (item, index) => (
                  <span key={index}>{item}</span>
                )
              )}
            </p>
            <p className="font-broad text-5xl font-extrabold uppercase flex flex-col h-full items-center gap-2">
              {['S', 'i', 'v', 'a', 's', 'a', 'm', 'y'].map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
          </div>
          <span className="text-4xl font-extrabold  ">
            Full Stack Developer
          </span>
        </div>
        <span className="text-4xl font-extrabold w-[35%]   px-12">
          Full Stack Developer
        </span>
      </div>
    </Header>
  );
};

export default Home;
