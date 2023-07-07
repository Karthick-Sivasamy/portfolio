import React from 'react';
import Header from '../components/Header';
import CustomHeader from '../components/CustomHeader';
import profileImage from '../assets/mypic.jpg';
import ArrowSvg from '../assets/Arrow.svg';

const Home = () => {
  return (
    <CustomHeader>
      <div className="bg-[#f5f5f7] text-black flex flex-col lg:flex-row-reverse items-center lg:justify-evenly py-12 sm:p-16 h-[90%] w-full">
        <div className=" h-full text-3xl md:text-4xl lg:text-5xl flex flex-col justify-center items-center gap-4 md:gap-8 grow-1 text-center">
          <h1 className="text-xl md:text-3xl font-semibold">Hi, My name is</h1>
          <h1 className="font-bold  ">Karthick Sivasamy</h1>
          <h1 className=" font-courier font-medium">I'm a {'{<'}Full Stack</h1>
          <h1 className=" font-courier font-medium">Web Developer{'/>}'}</h1>
        </div>
        <div className="w-auto h-full flex justify-center items-center  grow-0">
          <img
            src={profileImage}
            alt="photo"
            className="object-contain h-[65%] md:h-[80%] w-auto rounded-full"
          />
        </div>
      </div>
      <div className=" bg-[#f5f5f7] w-full h-[10%] flex items-center justify-center">
        <img src={ArrowSvg} alt="arrowicon" />
      </div>
    </CustomHeader>
  );
};

export default Home;
