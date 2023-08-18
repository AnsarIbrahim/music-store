import React from 'react';
import { MusicChat, Navbar, MainPage } from './main';
import { randomImages } from '../constants';

const Home = () => (
  <div className="flex bg-gray-300">
    <Navbar />
    <div className="flex flex-col sm:flex-row">
      <div className="">
        <MainPage randomImages={randomImages} />
      </div>
      <div className="">
        <MusicChat />
      </div>
    </div>
  </div>
);

export default Home;
