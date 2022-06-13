import React, { useState } from 'react';
import { Loader } from '../components';
import { Home } from '../pages';

const Opener = () => {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4950);
  };
  return loading ? <Loader /> : <Home />;
};

export default Opener;
