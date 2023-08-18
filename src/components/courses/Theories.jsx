import React from 'react';
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import { logo, play } from '../assets';

const Theories = () => (
  <div className="h-[135vh] w-[50%] bg-gray-200">
    <div className="mt-10 p-10 ">
      <img src={play} alt="logo" className="rounded-3xl" />
    </div>
    <div className="ml-10">
      <div className="gap-5">
        <p className=" text-3xl font-normal">Music Instruments</p>
        <div className=" mt-5 w-[25%] rounded-3xl bg-white px-5 hover:bg-gray-900 hover:text-white">
          <div className=" flex items-center gap-5 p-1 text-base font-semibold">
            <img src={logo} alt="logo" className=" h-10 w-10 rounded-full" />
            <p>Learn about</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-5">
          <AiFillClockCircle className="h-7 w-7" />
          <p className=" text-base font-medium">Track your pratice time</p>
        </div>
        <div className="mt-2 flex items-center gap-5">
          <AiFillStar className="h-7 w-7" />
          <p className=" text-base font-medium">Rate your favorite</p>
        </div>
        <div className="mt-10 text-base font-medium">
          <p className="text-3xl font-normal">About the Course</p>
          <p className="mt-5">
            Learn music notes and theory to become a skilled musician. This
            course covers everything from basic to advanced techniques,
            helping you play any instrument with confidence.
          </p>
        </div>
        <div className=" flex cursor-pointer items-center justify-center gap-10 p-10 text-lg font-semibold ">
          <div className="flex rounded-3xl border bg-white px-28 py-2 hover:bg-gray-900 hover:text-white">
            <p>Leave a review</p>
          </div>
          <div className="flex rounded-3xl border bg-white px-28 py-2 hover:bg-gray-900 hover:text-white">
            <p>Continue learning</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Theories;
