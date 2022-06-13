import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="about-me mt-8 px-8 tablet:px-10 laptop:px-40"
    >
      <header>
        <h2 className="text-body-1 font-bold text-very-light-grey capitalize font-jost">
          About me
        </h2>
        <hr className="h-two-px w-16 mt-2 bg-desaturated-cyan" />
      </header>
      <div className="mt-7 laptop:mt-10">
        <p className=" text-body-1 text-very-light-grey about-description">
          I’m a full-stack developper looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Montreal, Canada, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
      </div>
      <button className="w-52 h-12 mt-8 border-very-light-grey text-very-light-grey border">
        GO TO PORTFOLIO
      </button>
    </section>
  );
};

export default About;
