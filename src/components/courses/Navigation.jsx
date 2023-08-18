import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import { navLinks, footLinks } from '../../constants';

const Navigation = () => (
  <div className="min-h-screen w-20 bg-[#0e0e0e] px-4  text-gray-100 duration-300">
    <div className=" mt-4 flex items-center justify-center gap-2 rounded-full border-none bg-white">
      <img src={logo} alt="logo" className="h-9 w-9 rounded-full" />
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
            className={`whitespace-pre duration-500 ${'translate-x-28 overflow-hidden opacity-0'}`}
          >
            {menu?.name}
          </h2>
          <h2
            className={`${'hidden'} absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
          >
            {menu?.name}
          </h2>
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
          <h2
            style={{
              transitionDelay: `${menu.name + 3}00ms`,
            }}
            className={`whitespace-pre duration-500 ${'translate-x-28 overflow-hidden opacity-0'}`}
          >
            {menu?.name}
          </h2>
          <h2
            className={`${'hidden'} absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
          >
            {menu?.name}
          </h2>
        </Link>
      ))}
    </div>
  </div>
);

export default Navigation;
