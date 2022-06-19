import React from 'react';
import { Footer, Projects } from '../components';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main-projects-container"
    >
      <Projects />
      <Footer />
    </motion.div>
  );
}

export default Portfolio;
