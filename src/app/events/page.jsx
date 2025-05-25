"use client";
import { motion } from "framer-motion";
function Events()
{
    const events = [
        {
            title:'National Space Day - Session on Indian Space Program and Entrepreneurship',
            date:'24/08/24',
            link:'/images/event/gmeet.jpg',
            summary:'An insightful online session titled “Introduction to Indian Space Program and Entrepreneurship” was hosted by Arjit Saxena, founder of Resolute Lab of India, on 24th August 2024 from 7:00 PM to 8:30 PM. The session discussed India’s space journey and explored entrepreneurial opportunities within the sector, drawing significant participation.'
        },
        {
            title:"Planeterium Dome - SPACEWEEK",
            date:'08/10/24',
            link:'/images/event/dome.jpg',
            summary:'As a part of International Space week celebration,Astro Club set up a Planetary Show from 8th to 10th October  at Vivekananda Auditorium. The event attracted over 200 registrations per day and featured various space exhibits that piqued the interest of both students ,visitors and professionals.',
        },
        {
            title:"ESCAPE ROOM - SPACEWEEK",
            date:'09/10/24',
            link:'/images/event/escaperoom-celestia.jpg',
            summary:'The Escape Room event, conducted as part of the exhibition on 9th October,  This event involved solving multiple aptitude questions and puzzles to unlock the clue to next part of the puzzle which will eventually leads to the final clue for the puzzle. It turned out be massive success, drawing large crowds.',
        },
        
        {
            title:"Birla Science exhibition - SPACEWEEK",
            date:'09/10/24',
            link:'/images/event/exhibition.jpg',
            summary:'As a part of International Space week celebration,Astro Club organised a science exhibition from 8th to 10th October at Vivekananda Auditorium. The event attracted all people irrespective of their age  and featured various exhibits like Tower of Hanoi , Odessy and other interactive activities that piqued the interest of both students ,visitors and professionals.',
        },
        {
            title:"Meme Contest",
            date:'08/10/24',
            link:'/images/event/meme_poster.jpg',
            summary:'We ,Astro club, organised a Meme contest as a part of the International space week celebration events, to make awareness about the concepts of astronomy by popular culture of memes. This event attracted lots of participants and each expelled in a certain way to showcase their creative thinking',
        },
        {
            title:"ESCAPE ROOM 2.0 - AGNI'24",
            date:'09/11/24',
            link:'/images/event/agni-er.jpg',
            summary:"The Escape Room 2.0 event, conducted as part of the AGNI'24 on 9th November . This event involved solving aptitude questions ,puzzles and Morse codes to unlock the clue to next part of the puzzle which will eventually leads to the final clue for the puzzle. This event was also a major success following the previous Escape room event.",
        },
        {
            title:"CROSSWORD - AGNI'24",
            date:'10/11/24',
            link:'/images/event/crossword.jpg',
            summary:"The Space Crossword Puzzle event, conducted as part of the AGNI'24 on 10th November . This event involved solving puzzles with a fusion of treasure hunt theme . This event was a great start for informal events to attract people towards our club's ideology . All of the participants enjoyed played with and against their friends and they had a good time.",
        },
        {
            title:'Brainy Bash – Space Rebus & Puzzle Challenge',
            date:'06/03/2025',
            link:'/images/event/BrainyBash.jpg',
            summary:`As part of Techofes 2025, the Astro Club hosted the Brainy Bash event. It included two creative rounds. In the first round, teams solved rebus puzzles by guessing space-related words using images and symbols. In the second round, they pieced together a jumbled space picture within a limited time. The event drew good interest and was both fun and challenging for the participants.`
        } ,
        {
            title:'No Money No Honey – A Space Challenge',
            date:'07/03/2025',
            link:'/images/event/NoMoneyNoHoney.jpg',
            summary:`As part of Techofes 2025, the Astro Club conducted an exciting event called No Money No Honey. The event had two interesting rounds. In the first round, teams took part in a space quiz where they answered questions about planets, missions, and other space facts. The second round was an auction-style game where teams used virtual money to bid on items like satellites and telescopes. The event saw active participation from many students and turned out to be a lively and enjoyable experience.`
        },
        {
            title:'Visual Astronomy Workshop',
            date:'08/04/25',
            link:'/images/event/Visual_astronomy.jpg',
            summary:`The Visual Astronomy workshop, conducted by Sivasubramanyam from Chennai Astronomy Club as a part of KUGELBLITZ '25 on 8th April, and followed by Moon and Jupiter observation through a telescope. The workshop provided students with a comprehensive understanding of various sky-observing instruments and their usage, while also motivating them to actively engage in astronomical observations using the tools and resources available to them.The workshop's hands on session of viewing the planets through a Dobsonian telescope attracted 200 participants.  They learnt about constellations and sky-observing instruments such as binoculars and telescopes, including guidance on when to use them.`
        },
        {
            title:'Astrophotography',
            date:'07/04/25',
            link:'/images/event/Astrophotography.jpg',
            summary:`As part of Kugelblitz ‘25 , the Astro Club AU and CAC conducted an Astrophotography Workshop led by Mr. D. Vijay Devakumar. He introduced various telescopes used to capture celestial objects and emphasized image and video processing techniques through stacking software. The session was informative, inspiring curiosity and enthusiasm among students to explore the wonders of the night sky.`
        } 
    ];

    const isImage = (link) => 
        link && ['jpg', 'png', 'jpeg'].includes(link.split('.').pop().toLowerCase());

    return (
        <div className="relative min-h-screen min-w-full bg-gray-900 text-white p-4 md:p-8 overflow-hidden">
            <div className="fixed inset-0 z-0">
                <img 
                    src='/images/full-moon.jpg'
                    alt='aurora'
                    className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <h1 className="relative oswald text-6xl text-center  font-bold mt-16 lg:mt-20 mb-10  text-lime-300">
                Events & Workshops
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
                            <div className={` ${!isImage ? 'aspect-auto' : idx==4 ? 'aspect-[1/1]': 'aspect-[16/9]'}  rounded-xl overflow-hidden bg-gray-800`}>
                                {event.link && (
                                    isImage(event.link) ? (
                                        <img
                                            src={event.link}
                                            alt={event.title}
                                            className={` ${ idx===4 ? 'aspect-[1/1]' : 'h-full w-full  object-cover'}`}
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