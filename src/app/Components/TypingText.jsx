import React from "react";
import { motion } from "framer-motion";

export const TypingText = ({ text, speed = 0.5, classN = "" }) => {
  const words = text.split(" ").map((word) =>
    word.split("").map((letter, index) => ({
      letter,
      id: `${word}-${index}`,
    }))
  );

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
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
          {word.map(({ letter, id }) => (
            <motion.span
              key={id}
              variants={child}
              className={`inline-block text-center ${classN}`}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
