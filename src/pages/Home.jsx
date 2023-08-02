import React from 'react';
import Header from '../components/Header';
import CustomHeader from '../components/CustomHeader';
import profileImage from '../assets/mypic.jpg';
import profileImage1 from '../assets/newProfilePic.jpg';
import ArrowSvg from '../assets/Arrow.svg';

const Home = () => {
  return (
    profileImage && (
      <CustomHeader>
        <div className="bg-teal-300 text-black flex flex-col lg:flex-row-reverse items-center lg:justify-evenly py-12 sm:p-16 min-h-full w-full gap-6 lg:gap-0">
          <div className=" h-full text-2xl md:text-4xl lg:text-5xl flex flex-col justify-center items-center gap-4 md:gap-8 grow-1 text-center">
            <h1 className="text-xl md:text-3xl font-semibold">
              Hi, My name is
            </h1>
            <h1 className="font-bold  text-3xl md:text-5xl lg:text-6xl ">
              Karthick Sivasamy
            </h1>
            <h1 className=" font-courier font-medium">
              I'm a {'{<'}Full Stack
            </h1>
            <h1 className=" font-courier font-medium">Web Developer{'/>}'}</h1>
          </div>
          <img
            src={profileImage1}
            alt="photo"
            className="object-contain  h-[250px] md:h-[350px] w- rounded-full border-2  border-amber-200  p-1 bg-amber-100  shadow-xl "
          />
        </div>
      </CustomHeader>
    )
  );
};

export default Home;
