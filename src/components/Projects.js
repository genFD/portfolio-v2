const Projects = () => {
  return (
    <div>
      <section className="cards py-16">
        <div className="title text-center desktop:mb-36 ">
          <h2 className="font-bold text-heading-3">Projects</h2>
        </div>
        <div className="cards-center my-8 mx-auto">
          {/* single card */}
          <article className="card border border-devjobs">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/devjobs.jpg" alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                This is a CRUD RESTful API in a Node.js environment that runs on
                an Express server and uses a PostgreSQL database
              </p>
            </div>
            <footer className="card-footer">
              <span></span>
            </footer>
          </article>
          {/* end of single card */}

          {/* single card */}
          <article className="card border-invoice border">
            <header className="card-header">
              <span className="bg-bright-red"></span>
              <span className="bg-Rubber-Ducky"></span>
              <span className="bg-desaturated-cyan"></span>
            </header>
            <img src="/assets/invoice.jpg" alt="" />
            <div className="card-info">
              <h3>card title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque assumenda, fugiat dolore illo porro deserunt quaerat
                officia.
              </p>
            </div>
          </article>
          {/* end of single card */}

          {/* single card */}
          <article className="card border border-feedback">
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
          </article>
          {/* end of single card */}

          {/* single card */}
          <article className="card border border-Peach">
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
          </article>
          {/* end of single card */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
