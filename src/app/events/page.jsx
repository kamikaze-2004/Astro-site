"use client";
import { motion } from "framer-motion";
function Events()
{
    const events = [
        {
            title:'INTERNATIONAL SPACEDAY WITH ARJIT SAXENA',
            date:'24/08/24',
            link:'/images/event/gmeet.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            title:"Planeterium Dome - CELESTIA'24",
            date:'08/10/24',
            link:'/images/event/dome.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title:"ESCAPE ROOM - CELESTIA'24",
            date:'09/10/24',
            link:'/images/event/escaperoom-celestia.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        
        {
            title:"Birla Science exhibition - CELESTIA'24",
            date:'09/10/24',
            link:'/images/event/exhibition.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title:'ESCAPE ROOM 2.0 - AGNI',
            date:'10/11/24',
            link:'/images/event/agni-er.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }, {
            title:'CROSSWORD - AGNI',
            date:'9/11/24',
            link:'/images/event/crossword.jpg',
            summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
    ];

    const isImage = (link) => 
        link && ['jpg', 'png', 'jpeg'].includes(link.split('.').pop().toLowerCase());

    return (
        <div className="relative min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <div className="fixed inset-0 z-0">
                <img 
                    src='/images/full-moon.jpg'
                    alt='aurora'
                    className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <h1 className="relative oswald text-6xl text-center font-bold mt-8 lg:mt-20 mb-10 text-lime-300">
                Events
            </h1>
            
            <div className="relative flex flex-col gap-24 lg:gap-16">
                {events.map((event, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col lg:flex-row items-center gap-8 ${
                            idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        }`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className={` ${!isImage ? 'aspect-auto' : 'aspect-[16/9]'}  rounded-xl overflow-hidden bg-gray-800`}>
                                {event.link && (
                                    isImage(event.link) ? (
                                        <img
                                            src={event.link}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <iframe
                                            src={event.link}
                                            title={event.title}
                                            className="w-full h-full"
                                            allowFullScreen
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut", amount: 0.5 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                                hidden: { opacity: 0, x: idx % 2 === 0 ? -100 : 100 }
                            }}
                            className="w-full lg:w-1/2 space-y-4"
                        >
                            <h2 className="oswald text-4xl font-bold text-center lg:text-left">
                                {event.title}
                            </h2>
                            <h5 className="text-xl font-semibold text-center lg:text-left">
                                {event.date}
                            </h5>
                            <p className="text-md lg:text-lg text-left">
                                {event.summary}
                            </p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;