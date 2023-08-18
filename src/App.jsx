import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Next from './components/Next';

const App = () => (
  <Router>
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </div>
  </Router>
);

export default App;
