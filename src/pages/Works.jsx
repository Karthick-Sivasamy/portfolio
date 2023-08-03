import React from 'react';
import CustomHeader from '../components/CustomHeader';
import { motion } from 'framer-motion';
import { workData } from '../data';
import NewTab from '../assets/Newtab.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const images = [
  'https://wallpapercave.com/wp/wp12625487.jpg',
  'https://wallpapercave.com/fuwp/uwp3859167.jpeg',
  'https://wallpapercave.com/fuwp/uwp3855758.jpeg',
  'https://wallpapercave.com/fuwp/uwp3838467.jpeg',
  'https://wallpapercave.com/fuwp/uwp3876807.jpeg',
  'https://wallpapercave.com/dwp1x/wp4275032.jpg',
  'https://wallpapercave.com/dwp1x/wp4173581.jpg',
  'https://wallpapercave.com/dwp1x/wp4275031.jpg',
];

const Works = () => {
  return (
    <CustomHeader>
      <div className="bg-lime-300 p-4 md:p-8 flex flex-col justify-start min-h-full">
        <h1 className="text-2xl md:text-3xl font-semibold ">
          Here are some of my works...
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 my-8 gap-8 p-0 md:p-8 place-items-center">
          {workData.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
              }}
              key={index}
              className=" bg-white rounded-lg flex flex-col gap-10  cursor-pointer shadow-md h-full  "
            >
              <div className="flex flex-col items-center h-full">
                <LazyLoadImage
                  src={images[Math.floor(Math.random() * 8)]}
                  alt="image"
                  className="object-cover rounded-t-lg h-[250px] w-full"
                />
                <div className="text-center font-bold p-2 m-auto text-md flex items-center">
                  {item.title}
                </div>

                {/* <div className="flex flex-col gap-3   justify-between w-full  h-full">
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
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CustomHeader>
  );
};

export default Works;
