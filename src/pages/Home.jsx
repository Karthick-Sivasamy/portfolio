import React from 'react';
import Header from '../components/Header';
import CustomHeader from '../components/CustomHeader';
import profileImage from '../assets/mypic.jpg';
import ArrowSvg from '../assets/Arrow.svg';

const Home = () => {
  return (
    profileImage && (
      <CustomHeader>
        <div className="bg-[#f5f5f7] text-black flex flex-col lg:flex-row-reverse items-center lg:justify-evenly py-12 sm:p-16 h-full w-full gap-6 lg:gap-0">
          <div className=" h-full text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center items-center gap-4 md:gap-8 grow-1 text-center">
            <h1 className="text-xl md:text-3xl font-semibold">
              Hi, My name is
            </h1>
            <h1 className="font-bold  text-4xl md:text-5xl lg:text-6xl ">
              Karthick Sivasamy
            </h1>
            <h1 className=" font-courier font-medium">
              I'm a {'{<'}Full Stack
            </h1>
            <h1 className=" font-courier font-medium">Web Developer{'/>}'}</h1>
          </div>
          <img
            src={profileImage}
            alt="photo"
            className="object-contain  h-[55%] md:h-[85%] w- rounded-full border-2  border-gray-400  p-2 bg-[#f5f5f7]  shadow-lg "
          />
        </div>
      </CustomHeader>
    )
  );
};

export default Home;
