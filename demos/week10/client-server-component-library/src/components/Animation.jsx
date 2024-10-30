"use client";

import { motion } from "framer-motion";

export default function Animation({ flower_name, flower_location }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center"
    >
      <h2>{flower_name}</h2>
      <p>{flower_location}</p>
    </motion.div>
  );
}
