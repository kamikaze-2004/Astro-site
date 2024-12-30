"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { APODSection } from "./Components/ApodSection";
import { isMobile } from "react-device-detect";
 
export default function Home() {
  const router = useRouter();
  const apiKey = process.env.NASA_API_KEY;
  const apodUrl = useMemo(() => `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`, [apiKey]);
  
  const contents = [
    {
      title: 'Welcome to Astroclub AU',
      contents: 'We are a group of students who share an indomitable spirit to reach out to the stars! We are a club purely dedicated to Space Science Technology, Aeronautics, Astronomy, and Research.',
      link: '/about',
    },
    {
      title: 'Picture of the day',
      contents: 'Explore the mysteries of this cosmos on daily basis',
      link: '#apod',  
    },
    {
      title: 'Perspective',
      contents: 'Blinded by minute homo sapien perspective?! Look far outside',
      link: '/eyes',
    },
    {
      title: 'Space news',
      contents: 'What is going on in your neighbourhood',
      link: '/news'
    }
  ];
  
  const [currindex, setCurrIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [apodData, setApodData] = useState(null);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(apodUrl);
        const data = await response.json();
        setisLoading(false);
        setApodData(data);
      } catch(error) {
        console.error("Error fetching Apod data:", error);
        setisLoading(false);
      }
    }

    fetchApod();
  }, [apodUrl]);

  const togglePage = (link) => {
    if (link === "#apod") {
      const apodSection = document.getElementById("apod");
      if (apodSection) {
        apodSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (link) {
      router.push(link);
    }
  };
  
  return (
    <div className="relative text-white min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img
          src="/images/bg.jpg"
          alt="space"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <img
        src="/images/astronaut1.png"
        alt="astronaut1"
        className="absolute top-0 left-0  w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 z-10 opacity-75 float-around1 hidden sm:block"
      />
      <img
        src="/images/astronaut.png"
        alt="astronaut"
        className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 z-10 opacity-75 float-around2 hidden sm:block"
      />
      
      <div className="relative z-20">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-12 md:py-0">
          <div className="w-full md:w-1/3  flex items-center justify-center mb-8 md:mb-0">
            <motion.div
              className="relative "
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.img
                src="/images/astrologo.png"
                alt="astrologo"
                className=" relative  w-48 h-32 mt-0  lg:h-68 md:h-68 my-20  object-contain opacity-80 space-y-16"
                animate={isMobile ? {
                  scale: 6,
                } : {
                  scale: 6,
                }}
              />
            </motion.div>
          </div>

          <div className="relative row-span-2 flex items-center justify-center w-full mt-8 md:w-2/3 px-4 md:px-12">
            <motion.div 
              className=" absolute text-center space-y-6"
              key={currindex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 1,
                ease: easeInOut,
              }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                {contents[currindex].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
                {contents[currindex].contents}
              </p>
              <button
                className="bg-transparent text-white px-6 py-2 rounded-full border-2 border-lime-400 
                          transition-all duration-300 hover:bg-lime-400/10 hover:scale-105 
                          disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-transparent"
                onClick={() => togglePage(contents[currindex].link)}
                disabled={!contents[currindex].link}
              >
                {contents[currindex].link ? "Explore" : "Coming Soon"}
              </button>
            </motion.div>
          </div>
        </section>

        <section className=" min-h-screen px-4 py-16 bg-black/30 backdrop-blur-sm" id='apod'>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16">
              Astronomy Picture of the Day
            </h2>
            <APODSection isLoading={isLoading} apodData={apodData} />
          </div>
        </section>
      </div>
    </div>
  );
}