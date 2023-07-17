import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { motion } from 'framer-motion';
import { workData } from '../data';
import NewTab from '../assets/Newtab.svg';

const Works = () => {
  return (
    <CustomHeader>
      <div className="bg-green-300 p-4 md:p-24 flex flex-col justify-start h-auto">
        <h1 className="text-3xl font-semibold ">
          Here are some of my works...
        </h1>

        <div className="w-full flex flex-col my-8 gap-4">
          {workData.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg flex flex-col gap-10  cursor-pointer shadow-md  h-[300px] "
            >
              <div className="flex gap-8 h-full">
                <img
                  src={'https://wallpapercave.com/wp/wp7889593.jpg'}
                  alt="image"
                  className="object-cover rounded-lg   w-[250px]"
                />

                <div className="flex flex-col justify-between w-full  h-full">
                  <h1 className="text-3xl font-semibold ">{item.title}</h1>
                  <p className="text-lg font-medium">{item.passage}</p>
                  <h1 className="text-lg font-medium">
                    <strong>Technologies:</strong>
                    {'  '}
                    {item.technology}
                  </h1>
                  <h1 className="text-lg font-medium">
                    <strong>Hosting:</strong>
                    {'  '}
                    {item.hosting}
                  </h1>

                  <motion.div
                    className="flex gap-2 items-center w-fit py-2 px-6 rounded-lg text-md font-medium bg-blue-500 text-white "
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  >
                    Open Link{' '}
                    <img
                      src={NewTab}
                      alt="icon"
                      className="h-8 w-8 object-contain"
                    />
                  </motion.div>
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
