import Express from './Express';
import Github from './Github';
import Node from './Node';
import Postgresql from './Postgresql';
import ReactIcon from './React';

const Projects = () => {
  return (
    <div>
      <section className="cards py-16">
        <div className="title px-8 tablet:px-10 laptop:px-32">
          <h2 className="text-body-1 font-bold capitalize font-jost">
            Projects
          </h2>
          <hr className="h-two-px w-16 mt-2  text-desaturated-cyan" />
          {/* <div className="mt-7">
            <p className=" text-body-1 about-description">
              These projects are CRUD RESTful API in a Node.js environment that
              run on an Express server and use a PostgreSQL database
            </p>
          </div> */}
        </div>
        <div className=" flex flex-col px-6 tablet:flex-row justify-center mt-10 gap-8 h-full">
          {/* single card */}
          <article className="card cursor-pointer border-invoice border laptop:w-96">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/invoice.jpg" alt="" className="" />
            <div className="card-info">
              <h3 className="text-body-1 text-invoice font-bold underline ">
                Invoice App
              </h3>
              <p>
                Full stack{' '}
                <span className="text-invoice">invoicing application</span>{' '}
                <br />
                CRUD RESTful API built with Node.js and Express.
                <br /> It uses PostgreSQL database.
              </p>
            </div>
            <footer className="card-footer text-invoice px-4 flex items-center justify-between">
              <span className="hover:underline">
                <a href="https://testdeploycra.herokuapp.com/">Live demo</a>
              </span>
              <div className="flex gap-3 pb-1 ">
                <span>
                  <Node />
                </span>
                <span>
                  <Express />
                </span>
                <span>
                  <Postgresql />
                </span>
                <span>
                  <ReactIcon />
                </span>
                <span>
                  <a
                    href="https://github.com/hermkan/devjobs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </span>
              </div>
            </footer>
          </article>
          {/* end of single card */}

          {/* single card */}
          <article className="card cursor-pointer border border-devjobs laptop:w-96">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/devjobs.jpg" alt="" className="" />
            <div className="card-info font-baloo">
              <h3 className="text-body-1 text-devjobs font-bold underline">
                Devjobs
              </h3>
              <p>
                Full stack <span></span>
                <span className="text-devjobs">jobs board</span> <br />
                RESTful API built with Node.js and Express.
                <br /> It uses PostgreSQL database.
              </p>
            </div>
            <footer className="card-footer text-devjobs px-4 flex items-center justify-between">
              <span className="hover:underline">
                <a href="https://testdeploycra.herokuapp.com/">Live demo</a>
              </span>
              <div className="flex gap-3 pb-1 ">
                <span>
                  <Node />
                </span>
                <span>
                  <Express />
                </span>
                <span>
                  <Postgresql />
                </span>
                <span>
                  <ReactIcon />
                </span>
                <span>
                  <a
                    href="https://github.com/hermkan/devjobs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github />
                  </a>
                </span>
              </div>
            </footer>
          </article>
          {/* end of single card */}

          {/* single card */}
          {/* <article className="card border cursor-pointer border-feedback">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/feedback.jpg" alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda, fugiat dolore illo porro deserunt quaerat
                officia.
              </p>
            </div>
          </article> */}
          {/* end of single card */}

          {/* single card */}
          {/* <article className="card border cursor-pointer border-Peach">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/audio.jpg" alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda, fugiat dolore illo porro deserunt quaerat
                officia.
              </p>
            </div>
          </article> */}
          {/* end of single card */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
