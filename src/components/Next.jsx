import React from 'react';
import { Navigation, Courses, Theories } from './courses';

const Next = () => {
  return (
    <div className="flex">
      <Navigation />
      <Courses />
      <Theories />
    </div>
  );
};

export default Next;
