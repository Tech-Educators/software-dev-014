//!animations should always be in the client
"use client";
//we are importing the motion element to give a DOM element access to animations
import { motion } from "framer-motion";

export default function Animation() {
  return (
    // I want to animate my div
    //To animate my div, I need to give it different attributes
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
        className="flex flex-col items-center"
      >
        <h1>Cool animation</h1>
      </motion.div>
    </>
  );
}
