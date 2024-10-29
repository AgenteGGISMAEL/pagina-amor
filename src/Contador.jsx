import React from 'react';
import { motion } from 'framer-motion';

const Contador = ({ dias }) => (
  <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 50 }}>
    <h2>Hemos estado juntos por {dias} días. 🥰</h2>
  </motion.div>
);

export default Contador;
