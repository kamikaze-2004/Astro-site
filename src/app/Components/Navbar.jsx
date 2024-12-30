import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isMobile } from "react-device-detect";

const NavBar = ({ navItems = [], className = "" }) => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(!isMobile);

  
  const togglenav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`fixed border  border-transparent  z-[5001] top-2 left-1 lg:left-5 lg:top-14`}>
        <button className={`block py-1 px-3  border-2  bg-gray-900 text-current rounded-lg  hover:bg-black/5 dark:hover:bg-white/5 ${isOpen? 'border-red-400 ': 'border-lime-400'}`} onClick={togglenav}>
          {isOpen ? "X" : "☴"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{
              opacity: 1,
              y: -100,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className={`flex flex-wrap flex-shrink md:flex-nowrap max-w-fullscreen w-fit md:px-2 fixed top-14 lg:top-10 inset-x-0 mx-auto border border-neutral-200 dark:border-white/10 rounded-lg lg:rounded-full bg-transparent backdrop-blur-sm shadow-sm z-[5000] px-4 py-2 md:space-x-2 space-y-0 lg:space-y-2 items-center justify-center ${className}`}
          >
            {navItems.map((navItem, idx) => {
              const isActive = pathname === navItem.link;
              return (
                <Link
                  key={`nav-link-${idx}`}
                  href={navItem.link}
                  className={`relative border-transparent  text-neutral-700 dark:text-neutral-200 items-center flex text-center justify-center space-x-2 rounded-full hover:text-neutral-900 dark:hover:text-white px-4 lg:px-4 py-2  transition-all duration-200 ${
                    isActive ? "border-2 border-neutral-900 dark:border-lime-400" : ""
                  }`}
                >
                  <span className="text-sm">{navItem.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 dark:border-white"
                      style={{
                        top: "-2px",
                        bottom: "-2px",
                        left: "-2px",
                        right: "-2px",
                      }}
                      transition={{ type: "spring", duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;