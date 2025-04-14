import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isMobile } from "react-device-detect";

export const NavBar = ({ navItems = [], className = "" }) => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const [prevYpos, setPrevYpos] = useState(0);

  const controlNav = () => {
    if (window.scrollY < prevYpos) setShow(true);
    else setShow(false);
    setPrevYpos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, [prevYpos]);

  const togglenav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed border border-transparent z-[5001] top-2 left-1 lg:left-5 lg:top-12">
        <button
          className={`block py-1 px-3 border-2 bg-gray-900 text-current rounded-3xl hover:bg-black/5 dark:hover:bg-white/5 ${
            isOpen ? "border-red-400" : "border-lime-400"
          }`}
          onClick={togglenav}
        >
          {isOpen ? "X" : "☴"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`flex flex-wrap flex-shrink md:flex-nowrap max-w-fullscreen w-fit md:px-2 fixed top-14 lg:top-10 inset-x-0 mx-auto border border-neutral-200 dark:border-white/10 rounded-lg lg:rounded-full bg-transparent backdrop-blur-sm shadow-sm z-[5000] px-4 py-2 md:space-x-2 space-y-0 lg:space-y-2 items-center justify-center ${className}`}
          >
            <div className="flex items-center space-x-2">
              {navItems.map((navItem, idx) => {
                const isActive = pathname === navItem.link;
                return (
                  <Link
                    key={`nav-link-${idx}`}
                    href={navItem.link}
                    className={`relative text-neutral-700 dark:text-neutral-200 items-center flex text-center justify-center space-x-2 rounded-full hover:text-neutral-900 dark:hover:text-white px-4 lg:px-4 py-2 transition-all duration-200 ${
                      isActive ? "border border-neutral-900 dark:border-lime-400" : ""
                    }`}
                    style={{ boxSizing: "border-box", height: "40px" }} // Adjusted height to match original intent
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export const Sidebar = ({ navItems = [], className = "" }) => {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  

  const toggleNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`fixed z-[5002] ${pathname=='/eyes' ?
      'top-12 right-2' : 'top-4 right-2' }`}>
        <button 
          className={`block py-1 px-3 border-2 bg-gray-900 text-current rounded-lg hover:bg-black/5 dark:hover:bg-white/5 ${
            isOpen ? 'border-red-400' : 'border-lime-400'
          }`}
          onClick={toggleNav}
        >
          {isOpen ? "X" : "☴"}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[5002]"
              onClick={toggleNav}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900  shadow-xl z-[5003] flex flex-col py-16 px-4 ${className}`}
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((navItem, idx) => {
                  const isActive = pathname === navItem.link;
                  return (
                    <Link
                      key={`side-nav-${idx}`}
                      href={navItem.link}
                      onClick={toggleNav}
                      className={`relative text-neutral-700 dark:text-neutral-200 flex items-center space-x-2 rounded-lg px-4 py-2 transition-all duration-200 ${
                        isActive 
                          ? "bg-neutral-100 dark:bg-neutral-800 border-r-4 border-lime-400" 
                          : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      }`}
                    >
                      <span className="text-base">{navItem.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="side-highlight"
                          className="absolute inset-0"
                          transition={{ type: "spring", duration: 0.3 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ResponsiveNavBar = (props) => {
  return (
    <>
      {!isMobile && <NavBar {...props} />}
      {isMobile && <Sidebar {...props} />}
    </>
  );
};
export default ResponsiveNavBar;