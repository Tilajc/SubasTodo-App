import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';

const routesLanding = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default routesLanding;
