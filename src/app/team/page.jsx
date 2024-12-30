"use client"
import { motion } from 'framer-motion';

function Team(){
    const placeholder='Placeholder text -> needs tagline ASAP';
    const team = [
        {
            name: 'RAGURAM C',
            position: 'PRESIDENT',
            tag: "I'm Raguram, a geoinformatics student by day and stargazer by night. As President of the Astro Club, I'm passionate about exploring the wonders of our universe and uncovering the secrets of the cosmos. When I'm not mapping the Earth, you can find me gazing up at the stars, lost in the beauty and mystery of it all.",
            link: '/images/team/raguram.jpg',
        },
        {
            name: 'JEYASURIYA',
            position: 'VICE PRESIDENT',
            tag: "If you think you understand the size of the sun, then you probably don't",
            link: '/images/team/suriya.jpg',
        },
        {
            name: 'NEHAVARTHINI M',
            position: 'DIRECTOR OF PROJECTS',
            tag: placeholder,
            link: '/images/team/neha.jpg',
        },
        {
            name: 'SHAKTHI SRIRAM',
            position: 'DIRECTOR OF PROJECTS',
            tag: placeholder,
            link: '/images/team/Shakthi.jpg',
        },
        {
            name: 'RAVIKRISHNA B',
            position: 'HR SENIOR LEAD ',
            tag: 'Hi 👋 I am Ravikrishna😉',
            link: '/images/team/ravi.jpg',
        },
        {
            name: 'SIVANI K U',
            position: 'HR SENIOR LEAD ',
            tag: 'People are our constellations, together we shine!',
            link: '/images/team/sivani.jpg',
        },
        {
            name: 'VISHWA PRIYA S',
            position: 'QMS SENIOR LEAD ',
            tag: placeholder,
            link: '/images/team/vishwapriya.jpg',
        },
        {
            name: 'KAMATCHI R',
            position: 'MEDIA AND MARKETING SENIOR LEAD ',
            tag: 'Marketing Beyond the Milkyway',
            link: '/images/team/kamatchi.jpg',
        },
        {
            name: 'BALA SABARISH SH',
            position: 'EVENTS AND WORKSHOP SENIOR LEAD ',
            tag: placeholder,
            link: '/images/team/bala.jpg',
        },
        {
            name: 'PRAVEENA M',
            position: 'WORKSHOP SENIOR LEAD ',
            tag: placeholder,
            link: '/images/team/praveena.jpg',
        },
        {
            name: 'RIGINSTA R',
            position: 'DESIGN SENIOR LEAD ',
            tag: placeholder,
            link: '/images/team/riginsta.jpg',
        },
        {
            name: 'SRIVARSHINI R',
            position: 'CONTENT SENIOR LEAD ',
            tag: placeholder,
            link: '/images/team/srivarshini.jpg',
        },
        {
            name: 'SWATTIK MUKHOPADHYAY',
            position: 'PROJECTS SENIOR LEAD ',
            tag: 'Oh hi ....Interested in knowing and exploring space by remote sensing',
            link: '/images/team/swattik.jpg',
        },
        {
            name: 'HARIGURU J',
            position: 'PROJECTS SENIOR LEAD ',
            tag: 'No amount of money ever bought a second of time',
            link: '/images/team/hari.jpg',
        }
    ];

    return (
        <motion.div 
            className="relative text-white min-h-screen overflow-hidden"
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
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight line-clamp-1 ">
                                    {member.name}
                                </h2>
                                <p className="text-lime-400 font-medium text-sm sm:text-base">
                                    {member.position}
                                </p>
                                <p className={`text-gray-300 text-sm  italic ${member.tag.length >= 100 ? 'line-clamp-7' : 'line-clamp-2' } `}>
                                    "{member.tag}"
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