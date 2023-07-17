import React from 'react';
import CustomHeader from '../components/CustomHeader';

const About = () => {
  return (
    <CustomHeader>
      <div className="h-full  w-full bg-yellow-300 grid place-items-center">
        <div className="w-full flex flex-col lg:flex-row lg:items-center  justify-center lg:justify-between gap-6  md:gap-12 lg:gap-20 p-4 md:p-12 lg:p-24  ">
          <h1 className="text-4xl md:text-6xl font-bold flex-grow-0 ">About</h1>
          <div className="  lg:h-48 border-b-2 lg:border-b-0 border-b-black  lg:border-r-2 md:border-r-black w-full lg:w-10" />
          <div className="text-lg md:text-xl flex-grow-1 font-medium flex flex-col gap-4">
            <p>
              Hi, I'm <strong>Karthick Sivasamy</strong>, a{' '}
              <strong>full-stack</strong> developer with over{' '}
              <strong>1 years of experience</strong>. I'm passionate about
              building web applications that solve real-world problems. I'm
              proficient in a variety of programming languages and frameworks,
              including JavaScript, React, Node.js, and Python. I'm also an
              expert in SQL and NoSQL databases.
            </p>
            <p>
              In my previous role at Powersoft Techno Solutions, I was
              responsible for building and maintaining the coding standards and
              structures. I also developed a number of internal applications
              that helped to improve the efficiency of the business. I'm a
              highly motivated and results-oriented individual, and I'm always
              looking for new challenges.
            </p>
            <p>
              I'm confident that I have the skills and experience to be a
              valuable asset to your team. I'm eager to learn more about your
              company and discuss how I can contribute to your success.
            </p>
          </div>
        </div>
      </div>
    </CustomHeader>
  );
};

export default About;
