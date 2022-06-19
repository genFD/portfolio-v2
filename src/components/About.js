import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section
      id="about"
      className="about-me mt-8 px-8 tablet:px-10 laptop:px-40"
    >
      <header>
        <h2 className="text-body-1 font-bold capitalize font-jost">About me</h2>
        <hr className="h-two-px w-16 mt-2 bg-desaturated-cyan" />
      </header>
      <div className="mt-7 laptop:mt-10">
        <p className=" text-body-1 about-description">
          I’m a full-stack developper looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Montreal, Canada, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <Link to="/portfolio">
          <button className="w-40 h-12 mt-8 self-end border-very-light-grey border">
            Go to portfolio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
