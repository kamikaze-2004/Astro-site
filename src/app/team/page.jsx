"use client";

import { motion } from "framer-motion";

function Team() {
  const team = [
    {
      name: "Dr.A.Suresh Babu",
      position: "Club Advisor",
      link: "/images/team/clubadvisor.jpg",
      tag: "purple",
    },
    {
      name: "Muthusankar A K",
      position: "President",
      tagline: "My life is basically a black hole... everyone has theories, but nobody knows what's actually going on not even me...",
      link: "/images/team/team2026/Muthu_sankar.jpeg",
      tag: "grey",
    },
    {
      name: "Abdullah Jahufar",
      position: "Vice President",
      tagline: "c'est la vie, but make it martian",
      link: "/images/team/team2026/Abdullah.jpg",
      tag: "grey",
    },
    {
      name: "Kannan S A",
      position: "Human Resources Executive",
      tagline: "Talkative in the comfortable groups, sometimes what I talk won't be understood by others, either so stupid or so intelligent!",
      link: "/images/team/team2026/Kannan.jpeg",
      tag: "grey",
    },
    {
      name: "Nitesh Ananth K T",
      position: "Human Resources Executive",
      tagline: "The people I care about will never stand alone",
      link: "/images/team/team2026/Nithesh_Ananth.jpg",
      tag: "grey",
    },
    {
      name: "Mohit Shyam YE",
      position: "Projects Executive",
      tagline: "I don't chase people—I just let gravity do the work.",
      link: "/images/team/team2026/Mohit-Shyam.jpg",
      tag: "grey",
    },
    {
      name: "Sanjay Kumar E",
      position: "Projects Executive",
      tagline: "My location is always accurate. My life plans? Not so much.",
      link: "/images/team/team2026/Sanjay_Kumar.jpeg",
      tag: "grey",
    },
    {
      name: "Meghanath Vishwa M",
      position: "Design Executive",
      tagline: "Somewhere, something incredible is waiting to be known.",
      link: "/images/team/team2026/vishwa.png",
      tag: "grey",
    },
    {
      name: "Nithish Kumar M",
      position : "Events Executive",
      tagline: "Likes to interact, but mostly ends up being the silent one.",
      link: "/images/team/team2026/Nithish_Kumar.jpeg",
      tag: "grey",
    },
    {
      name: "Lohitt Ashwin V",
      position: "Workshops Executive",
      tagline: "Electrical engineer in training, professional Googler retired because ChatGPT got hired😅",
      link: "/images/team/team2026/Lohit_Ashwin.jpg",
      tag: "grey",
    },
    {
      name: "Dinesh M",
      position: "QAC Executive",
      tagline: "Space is to place as eternity is to time",
      link: "/images/team/team2026/Dinesh.jpeg",
      tag: "grey",
    },
    {
      name: "Suhalya Sha S",
      position: "Social Media & Marketing Executive",
      tagline: "Pennthaane Penn Soft ah irupaanu Ninaikaathinga... Naa Konjam Funn aana aalu....😂😂 ",
      link: "/images/team/team2026/Suhalya_Sha.jpeg",
      tag: "grey",
    },
    {
      name: "Siddhesswar M",
      position: "Corporate Relations and Outreach Executive",
      tagline: "romba thooram poiten, full ah mudichitu thaan thirumbi varuven",
      link: "/images/team/team2026/Siddesh.jpeg",
      tag: "grey",
    },
    {
      name: "Pranav R N",
      position: "Corporate Relations and Outreach Executive",
      tagline: "I'm either listening to music, playing tennis, or pretending I'll start my work in five minutes.",
      link: "/images/team/team2026/Pranav_R_N.png",
      tag: "grey",
    },
    {
      name: "Akhil Kumar Tarlana",
      position: "Astro Content and News Executive",
      tagline: "I'm here to learn about stars, planets, and black holes. Mostly because my attendance and motivation have already disappeared into one.",
      link: "/images/team/team2026/Akhil_Kumar.jpg",
      tag: "grey"
    },
    {
      name: "Rohith Kanna M",
      position: "Web Ops Executive",
      tagline: "Runtime Alert: Curiosity thread consuming 99% CPU on low battery.",
      link: "/images/team/team2026/Rohith_Kanna.png",
      tag: "grey"
    }
    
  ];

  return (
    <motion.div className="relative text-white min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <motion.img
          src="/images/crew.jpg"
          alt="Space Background"
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <motion.h1
          className="text-center text-5xl font-bold text-lime-300 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Team
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              className="bg-black/40 border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm hover:border-lime-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full aspect-square">
                <img
                  src={member.link}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-2">
                <h2
                  className={`text-2xl font-bold ${
                    member.tag === "purple"
                      ? "text-purple-400"
                      : member.tag === "green"
                      ? "text-green-400"
                      : "text-gray-300"
                  }`}
                >
                  {member.name}
                </h2>

                <p className="text-lime-400 text-sm font-medium">
                  {member.position}
                </p>

                <p className="text-gray-300 text-sm italic line-clamp-3">
                  {member.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
