import React from 'react';
import Spinner from 'react-spinkit';

const Loader = () => {
  return (
    <div className="flex flex-col gap-y-2 h-screen justify-center items-center">
      <Spinner name="triangle-skew-spin" color="#5FB4A2" />
      <Spinner name="triangle-skew-spin" color="#5FB4A2" />
    </div>
  );
};

export default Loader;
