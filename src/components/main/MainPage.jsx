import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BsMusicNote,
  BsFileMusic,
  BsFillMicMuteFill,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import {
  BiMessageSquare,
  BiSolidMessageRounded,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from 'react-icons/bi';
import { AiOutlineSearch, AiFillPlayCircle } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';
import { RiTimerFlashFill } from 'react-icons/ri';
import { MdPhone } from 'react-icons/md';

import { logo, play } from '../assets';

const MainPage = ({ randomImages }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numImagesToShow = 5;

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + numImagesToShow) % numImagesToShow,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % numImagesToShow);
  };

  const visibleImages = randomImages.slice(
    activeIndex,
    activeIndex + numImagesToShow,
  );
  const showOverlay = activeIndex + numImagesToShow < randomImages.length;

  return (
    <>
      <div className="mt-5 flex items-center gap-2 sm:mt-0">
        <div className=" z-50 flex flex-col items-center justify-center gap-3 sm:ml-4 sm:mt-10 sm:flex-row ">
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-52">
            <h1 className="text-3xl font-bold">Music Lesson</h1>
            <form action="" className="relative z-10 items-center px-10">
              <AiOutlineSearch className="absolute left-14 top-5 z-10 -translate-y-1/2 transform cursor-pointer items-center text-gray-500" />
              <input
                type="text"
                name="search"
                placeholder="Search for songs or music notes"
                className="z-10 rounded-full border-2 border-gray-600 py-1 pl-10 pr-10 font-semibold text-black placeholder-gray-500 ring-2 ring-gray-300 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 sm:pr-36"
              />
            </form>
          </div>
          <div className=" flex gap-2 sm:flex-row">
            <BsMusicNote />
            <BsFileMusic />
            <BiMessageSquare />
          </div>
        </div>
      </div>
      <div className="mt-5 border bg-white">
        <div className="m-5 rounded-3xl border border-gray-400">
          <div className="flex w-full items-center justify-between p-5">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">Music Basics</h2>
            </div>
            <div className="flex items-center gap-3 ">
              <img
                src={logo}
                alt="icon"
                className="h-5 w-5 rounded-full bg-white"
              />
              <p>John Mayer</p>
            </div>
          </div>
          <div className="relative p-5">
            <img
              src={play}
              alt="play"
              className="h-[45vh] w-[110%] rounded-3xl"
            />
            <div className="absolute bottom-0 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white bg-opacity-50 p-5">
              <div className="mb-3 flex cursor-pointer items-center gap-5">
                <span className="rounded-full bg-white p-2 text-black">
                  <AiFillPlayCircle className="h-8 w-8" />
                </span>
                <span className="rounded-full bg-white p-2 text-black">
                  <BsFillMicMuteFill className="h-8 w-8" />
                </span>
                <span className="rounded-full bg-white p-2 text-black">
                  <BiSolidMessageRounded className="h-8 w-8" />
                </span>
                <span className="rounded-full bg-white p-2 text-black">
                  <BsThreeDotsVertical className="h-8 w-8" />
                </span>
                <span className="rounded-full bg-white p-2 text-black">
                  <MdPhone className="h-8 w-8" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="flex items-center gap-2 p-3">
              <GoDotFill />
              {' '}
              <span className=" opacity-20">50 Lessons Available</span>
            </p>
            <p className="flex items-center gap-2 p-3 opacity-20">
              <RiTimerFlashFill />
              {' '}
              Ends in: 45 min
            </p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Community</h3>
            <span className="flex cursor-pointer gap-2">
              <BiLeftArrowAlt onClick={handlePrev} />
              <BiRightArrowAlt onClick={handleNext} />
            </span>
          </div>
          <div className="relative mt-2 flex gap-2">
            {visibleImages.map((pic, index) => (
              <div key={pic.name} className="relative">
                <img
                  src={pic.icon}
                  alt="random"
                  className="h-14 w-14 rounded-3xl sm:h-32 sm:w-44"
                />
                {index === numImagesToShow - 1 && showOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-white bg-opacity-50">
                    +
                    {randomImages.length - numImagesToShow}
                    {' '}
                    more
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

MainPage.propTypes = {
  randomImages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainPage;
