import React from 'react';
import Spinner from 'react-spinkit';

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Spinner name="folding-cube" color="#5FB4A2" />
      <Spinner name="folding-cube" color="#5FB4A2" />
      <Spinner name="folding-cube" color="#5FB4A2" />
      <Spinner name="folding-cube" color="#5FB4A2" />
    </div>
  );
};

export default Loader;
