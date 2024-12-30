"use client";
import { motion } from "framer-motion";
function Events()
{
    const events = [
        {
            title:'SPACEWEEK',
            date:'12/12/24',
            link:'/images/bg.jpg',
            summary:"I'm Raguram, a geoinformatics student by day and stargazer by night. As President of the Astro Club, I'm passionate about exploring the wonders of our universe and uncovering the secrets of the cosmos. When I'm not mapping the Earth, you can find me gazing up at the stars, lost in the beauty and mystery of it all.",
        },
        {
            title:'MEET',
            date:'13/12/24',
            link:'/images/juniors meet-2.jpg',
            summary:'This is placeholder content',
        },
        {
            title:'',
            date:'',
            link:'',
            summary:'',
        },
        {
            title:'',
            date:'',
            link:'',
            summary:'',
        },
        {
            title:'',
            date:'',
            link:'',
            summary:'',
        }, {
            title:'',
            date:'',
            link:'',
            summary:'',
        }
    ];
    return(
        <div className="relative min-h-screen bg-gray-900 text-white p-4 md:p-8 ">
        <div className="fixed inset-0 z-0">
        <img 
          src='/images/events.jpg'
          alt='aurora'
          className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        </div>
        <h1 className="relative oswald text-5xl text-center font-bold mt-16 mb-10 text-lime-300">Events</h1>
        <div className="relative flex flex-col gap-8">
        {
            events.map((event,idx)=>
            (
                <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center ${idx % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                    <div className="w-full lg:w-1/2 p-4">
                    <img
                    src={event.link!="" ? event.link :null}
                    alt={event.title}
                     className="w-full h-auto rounded-xl shadow"/>
                     </div>
                     <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true}}
                     transition={{ duration: 1 ,ease: "easeOut",amount:0.5}}
                     variants={{
                        visible : { opacity:1, x:0 },
                        hidden:{ opacity:0 , x: idx % 2 === 0 ? -100 : 100 }
                     }}
                      className="w-full lg:w-1/2 p-4 mt-0  space-x-2">
                     <h2 className="oswald text-5xl font-bold text-center lg:text-left ml-2 ">{event.title}</h2>
                     <h5 className="text-xl font-semibold text-center lg:text-left">{event.date}</h5>
                     <p className="text-md lg:text-lg text-left">{event.summary}</p>
                     </motion.div>
                     </div>
            ))
        }
        </div>
        </div>
    );
}

export default Events;
