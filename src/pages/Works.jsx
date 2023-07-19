import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { motion } from 'framer-motion';
import { workData } from '../data';
import NewTab from '../assets/Newtab.svg';

const Works = () => {
  return (
    <CustomHeader>
      <div className="bg-[#f5f5f7] p-4 md:p-8 flex flex-col justify-start h-auto">
        <h1 className="text-2xl md:text-3xl font-semibold ">
          Here are some of my works...
        </h1>

        <div className="w-full flex flex-col my-8 gap-4 p-0 md:p-8">
          {workData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg flex flex-col gap-10  cursor-pointer shadow-md h-full  "
            >
              <div className="flex flex-col sm:flex-row gap-8 h-full">
                <img
                  src={'https://wallpapercave.com/wp/wp7889593.jpg'}
                  alt="image"
                  className="object-cover rounded-lg  w-[250px]"
                />

                <div className="flex flex-col gap-3   justify-between w-full  h-full">
                  <h1 className="text-2xl md:text-3xl font-semibold ">
                    {item.title}
                  </h1>
                  <p className=" text-base sm:text-lg font-medium">
                    {item.passage}
                  </p>
                  <h1 className=" text-base sm:text-lg font-medium">
                    <strong>Technologies:</strong>
                    {'  '}
                    {item.technology}
                  </h1>
                  <h1 className=" text-base sm:text-lg font-medium">
                    <strong>Hosting:</strong>
                    {'  '}
                    {item.hosting}
                  </h1>

                  <a href={item.link} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="flex gap-2 items-center justify-center w-full sm:w-fit py-2 px-4 md:px-6 rounded-lg text-sm md:text-base font-medium bg-blue-500 text-white "
                    >
                      Open Link{' '}
                      <img
                        src={NewTab}
                        alt="icon"
                        className="h-8 w-8 object-contain"
                      />
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomHeader>
  );
};

export default Works;
