import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="center-cards mt-20 flex flex-col items-center desktop:items-start">
        <div className="desktop:pl-40 mb-16 laptop:mb-20 ">
          <article className="project-card flex">
            <div className="snap-container bg-devjobs bg-opacity-50 flex justify-center items-center border laptop:py-4  tablet:items-start">
              <img
                className="project-snapshot"
                src="/assets/devjobs.jpg"
                alt=""
              />
            </div>
            <div className="project-info tablet:pl-16 laptop:pl-32 laptop:pr-4">
              <hr className="h-two-px mt-10 tablet:mt-0 bg-very-light-grey opacity-10" />
              <div className="h-full  flex flex-col justify-center">
                <h2 className="text-very-light-grey mb-6 laptop:mb-8">
                  Manage
                </h2>
                <p className="text-very-light-grey project-info-text laptop:mb-6">
                  This project required me to build a fully responsive landing
                  page to the designs provided. I used HTML5, along with CSS
                  Grid and JavaScript for the areas that required interactivity,
                  such as the testimonial slider.
                </p>
                <button className="w-44 h-12 mt-6 flex justify-center items-center text-very-light-grey border border-very-light-grey">
                  View Project
                </button>
              </div>
              <hr className="h-two-px bg-very-light-grey opacity-10" />
            </div>
          </article>
        </div>

        <div className="desktop:pl-60 mb-16 laptop:mb-20">
          <article className="project-card flex ">
            <div className="project-info order-2 tablet:order-1 tablet:pr-16 laptop:pr-32 laptop:pl-4">
              <hr className="h-two-px mt-10 tablet:mt-0 bg-very-light-grey opacity-10" />
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-very-light-grey mb-6 laptop:mb-8">
                  Manage
                </h2>
                <p className="text-very-light-grey project-info-text laptop:mb-6">
                  This project required me to build a fully responsive landing
                  page to the designs provided. I used HTML5, along with CSS
                  Grid and JavaScript for the areas that required interactivity,
                  such as the testimonial slider.
                </p>
                <button className="w-44 h-12 mt-6 flex justify-center items-center text-very-light-grey border border-very-light-grey">
                  View Project
                </button>
              </div>
              <hr className="h-two-px bg-very-light-grey opacity-10" />
            </div>
            <div className="snap-container bg-feedback bg-opacity-90 flex justify-center items-center border order-1 tablet:order-2 laptop:py-4 ">
              <img
                className="project-snapshot"
                src="/assets/feedback.jpg"
                alt=""
              />
            </div>
          </article>
        </div>

        <div className="desktop:pl-40 mb-16 laptop:mb-20">
          <article className="project-card flex">
            <div className="snap-container bg-devjobs bg-opacity-50 flex justify-center items-center laptop:py-4 ">
              <img
                className="project-snapshot"
                src="/assets/invoice.jpg"
                alt=""
              />
            </div>
            <div className="project-info tablet:pl-16 laptop:pl-32 laptop:pr-4">
              <hr className="h-two-px mt-10 tablet:mt-0 bg-very-light-grey opacity-10" />

              <div className="h-full flex flex-col justify-center">
                <h2 className="text-very-light-grey mb-6 laptop:mb-8">
                  Manage
                </h2>
                <p className="text-very-light-grey project-info-text laptop:mb-6">
                  This project required me to build a fully responsive landing
                  page to the designs provided. I used HTML5, along with CSS
                  Grid and JavaScript for the areas that required interactivity,
                  such as the testimonial slider.
                </p>
                <button className="w-44 h-12 mt-6 flex justify-center items-center text-very-light-grey border border-very-light-grey">
                  View Project
                </button>
              </div>

              <hr className="h-two-px bg-very-light-grey opacity-10" />
            </div>
          </article>
        </div>

        <div className="desktop:pl-60 laptop:mb-20">
          <article className="project-card flex ">
            <div className="project-info laptop:pr-32 laptop:pl-4 order-2 tablet:pr-16 tablet:order-1">
              <hr className="h-two-px mt-10 tablet:mt-0 bg-very-light-grey opacity-10" />

              <div className="h-full flex flex-col justify-center">
                <h2 className="text-very-light-grey mb-6 laptop:mb-8">
                  Manage
                </h2>
                <p className="text-very-light-grey project-info-text laptop:mb-6">
                  This project required me to build a fully responsive landing
                  page to the designs provided. I used HTML5, along with CSS
                  Grid and JavaScript for the areas that required interactivity,
                  such as the testimonial slider.
                </p>
                <button className="w-44 h-12 mt-6 flex justify-center items-center text-very-light-grey border border-very-light-grey">
                  View Project
                </button>
              </div>
              <hr className="h-two-px bg-very-light-grey opacity-10" />
            </div>
            <div
              className="snap-container bg-audiophile bg-opacity-90 flex justify-center items-center
            order-1 tablet:order-2 laptop:py-4 
            "
            >
              <img
                src="/assets/e-com.jpg"
                className="project-snapshot"
                alt=""
              />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Projects;
