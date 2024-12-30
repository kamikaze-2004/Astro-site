"use client";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";

export function FadeInWhenVisible({ children,dir ='x',val=[0,50] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: easeInOut }}
      variants={{
        visible: { opacity: 1, [dir]:val[0] },
        hidden: { opacity: 0, [dir]:val[1] }
      }}
    >
      {children}
    </motion.div>
  );
}