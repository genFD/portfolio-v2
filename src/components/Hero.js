import React from 'react';
import { Button } from '../components';

const Hero = () => {
  return (
    <section className="hero mt-24 px-8 tablet:px-10 laptop:px-40">
      <h1 className="font-extrabold text-heading-1 flex flex-col gap-y-2">
        <span className="heading text-desaturated-cyan">Robust Softwares.</span>
        <span className="heading text-light-grey">Beautiful Experiences.</span>
      </h1>
      <Button>About me</Button>
    </section>
  );
};

export default Hero;
