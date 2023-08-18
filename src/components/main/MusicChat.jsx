import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { PiPaperPlaneRightThin } from 'react-icons/pi';
import { logo } from '../assets';
import { musicFoot } from '../../constants';

const MusicChat = () => {
  return (
    <>
      <div className="ml-20 mt-10 flex flex-col items-center rounded-3xl border bg-white">
        <div className="flex flex-col items-center p-4">
          <div className="flex w-96 items-center justify-between">
            <p className="text-3xl font-bold">Music Chat</p>
            <span className="cursor-pointer">
              <AiOutlineDown />
            </span>
          </div>
          <div className="mt-4 h-0.5 w-[109%] bg-gray-200">
            <hr />
          </div>
          <div className="flex w-96 flex-col items-center justify-center">
            <div className="mt-5 flex w-96 items-center">
              <img src={logo} alt="logo" className="mb-12 h-8 w-8" />
              <div className="mb-5 flex flex-col items-center">
                <div className="ml-5 flex w-64 items-center justify-between text-sm font-semibold opacity-20">
                  <p>Adam Smith</p>
                  <p>9:28 AM</p>
                </div>
                <div className="mt-2 rounded-3xl border bg-slate-100 px-5 py-1">
                  <p className="p-1 text-sm font-medium text-black opacity-40">
                    I need help with music notes
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex w-96 items-center">
              <img src={logo} alt="logo" className="mb-12 h-8 w-8" />
              <div className="flex flex-col items-center">
                <div className="ml-5 flex w-64 items-center justify-between text-sm font-semibold opacity-20">
                  <p>Emily Brown</p>
                  <p>9:29 AM</p>
                </div>
                <div className="mt-2 rounded-3xl border bg-slate-100 px-3 py-1">
                  <p className="w-60 p-1 text-sm font-medium text-black opacity-40">
                    Is music theory different for each instrument
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-96 flex-col items-end justify-end">
              <div className="text-sm font-semibold opacity-20">
                <p>You</p>
              </div>
              <div className="mt-2 rounded-3xl border bg-slate-100 px-3 py-1">
                <p className="w-60 p-1 text-sm font-medium text-black opacity-40">
                  Hey guys, let's practice more to improve!
                </p>
              </div>
            </div>

            <div className="flex w-96 items-center">
              <img src={logo} alt="logo" className="mb-24 h-8 w-8" />
              <div className="flex flex-col items-center">
                <div className="ml-5 mt-2 flex w-64 items-center justify-between text-sm font-semibold opacity-20">
                  <p>Adam Smith</p>
                </div>
                <div className="mr-20 mt-2 rounded-3xl border bg-slate-100 px-3 py-1">
                  <p className="w-40 p-1 text-sm font-medium text-black opacity-40">
                    haha
                  </p>
                </div>
                <div className="flex flex-col items-end justify-end text-sm font-semibold">
                  <p className="opacity-20">9:29 AM</p>
                  <div className="mt-1 rounded-3xl border bg-slate-100 px-3 py-1">
                    <p className="w-60 p-1 text-sm font-medium text-black opacity-40">
                      But i had to tune my
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex w-96 items-center">
              <img src={logo} alt="logo" className="mb-12 h-8 w-8" />
              <div className="flex flex-col items-center">
                <div className="ml-5 flex w-64 items-center justify-between text-sm font-semibold opacity-20">
                  <p>Music Theories</p>
                  <p>Begineer</p>
                </div>
                <div className="mt-2 rounded-3xl border bg-slate-100 px-3 py-1">
                  <p className="w-60 p-1 text-sm font-medium text-black opacity-40">
                    Learn the Basics
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-96 flex-col items-end justify-end">
              <div className="text-sm font-semibold opacity-20">
                <p>MusicMentor</p>
              </div>
              <div className="mt-2 rounded-3xl border bg-slate-100 px-3 py-2">
                <p className="w-60 pb-5 text-sm font-medium text-black opacity-40">
                  Understand Music Notes
                </p>
              </div>
            </div>

            <div className="mt-4 h-0.5 w-[109%] bg-gray-200">
              <hr />
            </div>
            <div className="mt-5 flex w-96 items-center justify-between">
              <div className="">
                <input
                  type="text"
                  name="search"
                  placeholder="Type your comment..."
                  className="rounded-full border-2 border-gray-600 py-1 pl-2 font-semibold text-black placeholder-gray-500 ring-2 ring-gray-300 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-gray-500 sm:pr-24"
                />
              </div>
              <div className="mb-3 mr-5 h-5 w-5 cursor-pointer opacity-40">
                <PiPaperPlaneRightThin className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 ml-20 mt-5 flex flex-col items-center gap-2">
        {musicFoot?.map((item, i) => (
          <div
            className="flex w-96 cursor-pointer items-center justify-between rounded-3xl border bg-white p-2 text-black"
            key={i}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-900 p-3 text-white ">
                {React.createElement(item?.icon, { size: '15' })}
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {item?.name}
              </p>
            </div>
            <div className="opacity-40">
              {React.createElement(item?.icon1, { size: '20' })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MusicChat;
