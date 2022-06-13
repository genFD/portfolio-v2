import { About, Header, Hero, Divider, Footer } from '../components';

function Home() {
  return (
    <div id="home">
      <Header />
      <main className="">
        <Hero />
        <Divider />
        <About />
        <Divider />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
