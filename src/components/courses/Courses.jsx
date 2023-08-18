import React from 'react';
import { FaMusic } from 'react-icons/fa';
import { musicTheories } from '../../constants';

const Courses = () => (
  <div className="ml-10 mt-10 flex w-[50%] flex-col">
    <div className="flex items-center justify-between">
      <p className="text-3xl font-semibold">Music Theories</p>
      <div className="mr-5 flex items-center gap-5">
        <p className="rounded-3xl bg-gray-900 p-5 text-white hover:bg-white hover:text-gray-900 ">
          <FaMusic size={40} />
        </p>
        <p className="text-xl font-medium">Learn the</p>
      </div>
    </div>
    {musicTheories.map((theory) => (
      <div
        className="mr-5 mt-5 flex cursor-pointer items-center justify-between rounded-3xl border bg-gray-200 hover:bg-gray-900 hover:text-white"
        key={theory.name}
      >
        <div className="flex w-full items-center justify-between p-5">
          <div className="">
            <img
              src={theory.icon}
              alt="random"
              className="h-14 w-14 rounded-3xl sm:h-40 sm:w-44"
            />
          </div>
          <div className="mr-44 flex flex-col items-start justify-start gap-1  text-justify">
            <p className="text-xl font-semibold">{theory.name}</p>
            <p className="text-xl  font-medium opacity-40">{theory.detail}</p>
            <span className="h-2 w-full bg-gray-300">
              <hr />
            </span>
            <p className="text-xl font-medium opacity-40">{theory.last}</p>
          </div>
          <div className="top-0 mb-28 rounded-full bg-white p-3 text-gray-900 ">
            {React.createElement(theory.icon1, { size: '20' })}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Courses;
