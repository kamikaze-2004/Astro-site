"use client"
import { motion } from 'framer-motion';

function Team(){
    const team = [
  {
    name: 'Sivani K U',
    position: 'President',
    tagline: 'Mapping minds and guiding stars where Earth meets the cosmos',
    link: '/images/team/sivani.jpg',
    tag: 'purple',
  },
  {
    name: 'Bala Sabarish S H',
    position: 'Vice President & corporate relations executive',
    tagline: "It's not who I'm underneath, but what I do that defines me",
    link: '/images/team/sabarish.jpg',
    tag: 'grey',
  },

  {
    name: 'Arthi S',
    position: 'QAC Executive',
    tagline: 'From Stargazers to Space Thinkers - Discover the Universe With Us!',
    link: '/images/team/arthi.jpg',
    tag: 'purple',
  },
  {
    name: 'SWARNALATHA N',
    position: 'HR & Operations Executive',
    tagline: 'From marching under the sun to exploring under the stars.',
    link: '/images/team/swarnalatha.jpg',
    tag: 'purple',
  },
  {
    name: 'Thema E S',
    position: 'Content creation executive',
    tagline: 'Space teaches as even in the vast unko',
    link: '/images/team/thema.jpg',
    tag: 'green',
  },
  {
    name: 'Ashvika G M',
    position: 'Event Executive',
    tagline: 'Somewhere, something incredible is waiting to be known',
    link: '/images/team/ashvika.jpg',
    tag: 'green',
  },
  {
    name: 'Vidya devi',
    position: 'Workshop Executive',
    tagline: 'Let the cosmos calm your chaos',
    link: '/images/team/vidya.jpg',
    tag: 'purple',
  },
  {
    name: 'Shewak N',
    position: 'Design Executive',
    tagline: 'Everything is nothing with a twist',
    link: '/images/team/shewak.jpg',
    tag: 'purple',
  },
  {
    name: 'Riginsta A',
    position: 'Media and communication executive',
    tagline: 'It’s the tiniest particles that holds the endless cosmos together',
    link: '/images/team/riginsta.jpg',
    tag: 'purple',
  },
  {
    name: 'Monika Devi E',
    position: 'Astro Content and Newsletter',
    tagline: 'Writing is my stage, words are my performance.',
    link: '/images/team/monika.jpg',
    tag: 'purple',
  },
  {
    name: 'Kannan S A',
    position: 'Contents and Newsletters',
    tagline: 'Observe like a blackhole',
    link: '/images/team/sa.jpg',
    tag: 'grey',
  },
  {
    name: 'MATHAN SRI V',
    position: 'WORKSHOP',
    tagline: 'Cosmos is our compass💫✨',
    link: '/images/team/mathan.jpg',
    tag: 'grey',
  },
  {
    name: 'Nandhana.R',
    position: 'Outreach',
    tagline: 'Bringing the universe closer',
    link: '/images/team/nandhana.jpg',
    tag: 'grey',
  },
  {
    name: 'MUTHUSANKAR A K',
    position: 'EVENTS',
    tagline: 'What is and always will be, Humanity’s greatest and worst idea is about Διάστημα & Φυσική',
    link: '/images/team/muthusankar.jpg',
    tag: 'grey',
  },
  {
    name: 'M.Rajanandhini',
    position: 'Workshop',
    tagline: '🚀 "Curious minds, endless skies"',
    link: '/images/team/rajanandhini.jpg',
    tag: 'grey',
  },
  {
    name: 'Kashika V',
    position: 'Events',
    tagline: 'From earth to the infinite',
    link: '/images/team/kashika.jpg',
    tag: 'grey',
  },
  {
    name: 'Eshaanjana S',
    position: 'HR',
    tagline: 'Launch with courage, orbit with confidence.',
    link: '/images/team/eshaanjana.jpg',
    tag: 'grey',
  },
  {
    name: 'Archana v',
    position: 'Events',
    tagline: 'Life is short,make it sweet🍓',
    link: '/images/team/archana.jpg',
    tag: 'grey',
  },
  {
    name: 'Meganath Vishwa M',
    position: 'Design',
    tagline: '"Somewhere, something incredible is waiting to be known."',
    link: '/images/team/meganath.jpg',
    tag: 'grey',
  },
  {
    name: 'Akash Rajan R',
    position: 'HR',
    tagline: 'Turning stargazing into star-reaching',
    link: '/images/team/akash.jpg',
    tag: 'grey',
  },
  
  {
    name: 'Siddhesswar M',
    position: 'Outreach',
    tagline: 'Never tell me the odds!',
    link: '/images/team/siddhesswar.jpg',
    tag: 'grey',
  },
  {
    name: 'Surya.M',
    position: 'Marketing and social media',
    tagline: 'sailing into uncharted waters',
    link: '/images/team/surya.jpg',
    tag: 'grey',
  },
  {
    name: 'Lalitha Banu R',
    position: 'Space observation',
    tagline: 'Curiosity with Cosmic scale',
    link: '/images/team/lalitha.jpg',
    tag: 'grey',
  },
  {
    name: 'Mohit Shyam YE',
    position: 'Projects',
    tagline: 'Aim beyond the stars because limits don’t exist in an infinite universe.',
    link: '/images/team/mohit.jpg',
    tag: 'grey',
  },
  {
    name: 'Pon Ajith Kumar P',
    position: 'Projects',
    tagline: 'Turning Space Curiosity into Code',
    link: '/images/team/pon.jpg',
    tag: 'grey',
  },
  {
    name: 'Infant Riny Sandhiya A',
    position: 'Marketing and Media',
    tagline: 'Marketing the Magic of the Universe 🌚🌌',
    link: '/images/team/infant.jpg',
    tag: 'grey',
  },
  {
    name: 'Kavya Isaimozhi JR',
    position: 'QAC',
    tagline: 'Turning standards into Smooth events',
    link: '/images/team/kavya.jpg',
    tag: 'grey',
  },
]
;

    return (
        <motion.div 
            className="relative text-white min-h-screen min-w-full overflow-hidden"
            initial="hidden"
            animate="visible"
        >
            <div className="fixed inset-0 z-0">
                <motion.img
                    src="/images/crew.jpg"
                    alt="space"
                    className="w-full h-full object-cover opacity-50"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.5 }}
                    transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-black/30" />
            </div>
            
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
                <motion.h1 
                    className="oswald text-center mt-12 text-5xl text-lime-300 sm:text-5xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Our Team
                </motion.h1>
                
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                >
                    {team.map((member, index) => (
                        <motion.div 
                            key={member.name}
                            className="bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-lime-200 rounded-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div 
                                className="w-full aspect-auto lg:aspect-square cursor-auto"
                            >
                                <motion.img
                                    src={member.link}
                                    alt={member.name}
                                    className="w-full h-full object-contain bg-transparent"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="p-4 sm:p-6 space-y-1 sm:space-y-2"
                            >
                                <h2 className={`text-xl sm:text-2xl font-bold tracking-tight line-clamp-1 ${member.tag == 'orange' ? 'text-orange-400' : 'text-purple-400'} `}>
                                    {member.name}
                                </h2>
                                <p className="text-lime-400 font-medium text-sm sm:text-base">
                                    {member.position}
                                </p>
                                <p className={`text-gray-300 text-sm  italic ${member.tagline.length >= 100 ? 'line-clamp-7' : 'line-clamp-2' } `}>
                                    "{member.tagline}"
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

           
        </motion.div>
    );
};

export default Team;
