import React from 'react';
import { Navigation, Courses, Theories } from './courses';

const Next = () => (
  <div className="flex">
    <Navigation />
    <Courses />
    <Theories />
  </div>
);

export default Next;
