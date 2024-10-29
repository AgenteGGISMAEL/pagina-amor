import React from 'react';
import { motion } from 'framer-motion';

const MensajeEspecial = ({ mensaje }) => (
  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
    <p>{mensaje}</p>
  </motion.div>
);

export default MensajeEspecial;
