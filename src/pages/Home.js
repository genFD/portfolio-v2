import { About, Hero, Divider, Footer } from '../components';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
      </main>
      <Footer />
    </motion.div>
  );
}

export default Home;
