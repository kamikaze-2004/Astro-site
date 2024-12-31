"use client"
import { motion } from 'framer-motion';

function Team(){
    const team = [
        {
            name: 'RAGURAM C',
            position: 'PRESIDENT',
            tagline: "I'm Raguram, a geoinformatics student by day and stargazer by night. As President of the Astro Club, I'm passionate about exploring the wonders of our universe and uncovering the secrets of the cosmos. When I'm not mapping the Earth, you can find me gazing up at the stars, lost in the beauty and mystery of it all.",
            link: '/images/team/raguram.jpg',
            tag:'orange',

        },
        {
            name: 'JEYASURIYA',
            position: 'VICE PRESIDENT',
            tagline: "If you think you understand the size of the sun, then you probably don't",
            link: '/images/team/suriya.jpg',
            tag:'purple',
        },
        {
            name: 'NEHAVARTHINI M',
            position: 'DIRECTOR OF PROJECTS',
            tagline: 'A researcher unveiling the Moon’s hidden tales, crater by crater.',
            link: '/images/team/neha.jpg',
            tag:'orange',
        },
        {
            name: 'SHAKTHI SRIRAM',
            position: 'DIRECTOR OF PROJECTS',
            tagline: "A human that converts Caffeine into Code ",
            link: '/images/team/Shakthi.jpg',
            tag:'orange',
        },
        {
            name: 'RAVIKRISHNA B',
            position: 'HR SENIOR LEAD ',
            tagline: 'The moon and I are alike- never lonely,just beautifully alone',
            link: '/images/team/ravi.jpg',
            tag:'purple',
        },
        {
            name: 'SIVANI K U',
            position: 'HR SENIOR LEAD ',
            tagline: 'People are our constellations, together we shine!',
            link: '/images/team/sivani.jpg',
            tag:'purple',
        },
        {
            name: 'VISHWA PRIYA S',
            position: 'QMS SENIOR LEAD ',
            tagline: "Dear Sirius, please don't be jealous",
            link: '/images/team/vishwapriya.jpg',
            tag:'purple',
        },
        {
            name: 'KAMATCHI R',
            position: 'MEDIA AND MARKETING SENIOR LEAD ',
            tagline: 'Marketing Beyond the Milkyway',
            link: '/images/team/kamatchi.jpg',
            tag:'purple',
        },
        {
            name: 'BALA SABARISH SH',
            position: 'EVENTS AND WORKSHOP SENIOR LEAD ',
            tagline: "We've always defined ourselves by our ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known.",
            link: '/images/team/bala.jpg',
            tag:'purple',
        },
        {
            name: 'PRAVEENA M',
            position: 'EVENTS AND WORKSHOP SENIOR LEAD  ',
            tagline: "The stars don't look bigger, but they do look brighter.",
            link: '/images/team/praveena.jpg',
            tag:'purple',
        },
        {
            name: 'RIGINSTA R',
            position: 'DESIGN SENIOR LEAD ',
            tagline: "Present is all you have for every betterment u wish for in the future!!!",
            link: '/images/team/riginsta.jpg',
            tag:'purple',
        },
        {
            name: 'SRIVARSHINI R',
            position: 'CONTENT SENIOR LEAD ',
            tagline: 'Hey, I’m Srivarshini, the Astro Club’s content lead! Writing cosmic tales with a feminist spark—because the stars aren’t the only things breaking barriers.',
            link: '/images/team/srivarshini.jpg',
            tag:'purple',
        },
        {
            name: 'SWATTIK MUKHOPADHYAY',
            position: 'PROJECTS SENIOR LEAD ',
            tagline: 'Oh hi ....Interested in knowing and exploring space by remote sensing',
            link: '/images/team/swattik.jpg',
            tag:'purple',
        },
        {
            name: 'HARIGURU J',
            position: 'PROJECTS SENIOR LEAD ',
            tagline: "Technically we are made of Stardust , so the vast cosmos is rightfully ours to conquer.",
            link: '/images/team/hari.jpg',
            tag:'purple',
        }
    ];

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