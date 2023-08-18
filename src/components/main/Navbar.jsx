import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, footLinks } from '../../constants';
import { menu, close, logo } from '../assets';

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="top-0 z-50 flex gap-6">
        <div className="hidden w-80 bg-[#0e0e0e] px-4  text-gray-100 duration-300 sm:block">
          <div className="flex justify-end py-3" />
          <div className=" mt-4 flex items-center justify-center gap-2 rounded-full bg-white text-slate-600 ">
            <img
              src={logo}
              alt="logo"
              className="h-9 w-9 rounded-full bg-white"
            />
            <div className="hidden flex-col font-sans sm:flex ">
              <p>Music Theory</p>
              <p className="text-sm underline">musiclearner@musicme</p>
            </div>
          </div>
          <div className="relative mt-4 flex flex-col justify-between gap-4">
            {navLinks?.map((menu) => (
              <Link
                to={menu?.link}
                key={menu.name}
                className={` ${
                  menu?.margin && 'mt-5 sm:mt-24'
                } group flex items-center gap-3.5 rounded-md  p-2 text-sm font-medium text-white hover:bg-white hover:text-gray-900`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2 className="flex">{menu?.name}</h2>
              </Link>
            ))}
            {footLinks?.map((menu) => (
              <Link
                to={menu?.link}
                key={menu.name}
                className={` ${menu?.margin && 'mt-14 sm:mt-80'}
              group flex items-center gap-3.5 rounded-md  p-2 text-sm font-medium text-white hover:bg-white hover:text-gray-900`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2 className="flex">{menu?.name}</h2>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`w-[100wh] bg-[#0e0e0e] ${
            open ? ' w-96' : 'w-[4.5rem]'
          } px-4 text-gray-100 duration-300 sm:hidden`}
        >
          <div className="flex justify-end py-3">
            <button
              className="cursor-pointer"
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close Menu' : 'Open Menu'}
            >
              <img src={open ? close : menu} alt="menu" size={26} />
            </button>
          </div>
          <div className=" mt-4 flex items-center justify-center gap-2 rounded-full bg-white text-slate-600 ">
            <img
              src={logo}
              alt="logo"
              className="h-9 w-9 rounded-full bg-white"
            />
            <div className="hidden flex-col font-sans sm:flex ">
              <p>Music Theory</p>
              <p className="text-sm underline">musiclearner@musicme</p>
            </div>
          </div>
          <div className="relative mt-4 flex flex-col justify-between gap-4">
            {navLinks?.map((menu) => (
              <Link
                to={menu?.link}
                key={menu.name}
                className={` ${
                  menu?.margin && 'mt-5 sm:mt-24'
                } group flex items-center gap-3.5 rounded-md  p-2 text-sm font-medium text-white hover:bg-white hover:text-gray-900`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  style={{
                    transitionDelay: `${menu.name + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'translate-x-28 overflow-hidden opacity-0'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
            {footLinks?.map((menu) => (
              <Link
                to={menu?.link}
                key={menu.name}
                className={` ${menu?.margin && 'mt-14 sm:bottom-0'}
              group flex items-center gap-3.5 rounded-md  p-2 text-sm font-medium text-white hover:bg-white hover:text-gray-900`}
              >
                <div>{React.createElement(menu?.icon, { size: '20' })}</div>
                <h2
                  style={{
                    transitionDelay: `${menu.name + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && 'translate-x-28 overflow-hidden opacity-0'
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && 'hidden'
                  } absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
