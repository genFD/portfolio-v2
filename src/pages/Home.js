import { About, Header, Hero, Divider } from '../components';

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
    </div>
  );
}

export default Home;
