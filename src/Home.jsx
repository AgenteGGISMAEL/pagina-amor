import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
  <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
    ¡Feliz 200 dias, mi princesa hermosa! 💖
  </motion.h1>
);

export default Home;
