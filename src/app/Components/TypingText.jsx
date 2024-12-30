import React from "react";
import { motion } from "framer-motion";

export const TypingText = ({ text, speed = 0.5,classN }) => {
  
    const letters = text.split("").map((letter, index) => {
    
        return letter === " " ? "\u00A0" : letter; 
      });


  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: speed, 
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: "50%" },
    visible: { opacity: 1, y: "0%" },
  };

  return (
    <motion.div
      className="inline-block overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className={`inline-block ${classN}`}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

