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
        <div className="cards-center my-8 mx-auto">
          {/* single card */}
          <article className="card cursor-pointer border-invoice border">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/invoice.jpg" alt="" />
            <div className="card-info">
              <h3>Invoice App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda, fugiat dolore illo porro deserunt quaerat
                officia.
              </p>
            </div>
          </article>
          {/* end of single card */}

          {/* single card */}
          <article className="card cursor-pointer border border-devjobs">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/devjobs.jpg" alt="" />
            <div className="card-info">
              <h3>Devjobs</h3>
              <p>
                This is a CRUD RESTful API in a Node.js environment that runs on
                an Express server and uses a PostgreSQL database
              </p>
            </div>
            <footer className="card-footer">
              <span>
                <a href="https://testdeploycra.herokuapp.com/">Live demo</a>
              </span>
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
