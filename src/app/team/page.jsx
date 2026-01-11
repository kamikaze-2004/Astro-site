"use client";

import { motion } from "framer-motion";

function Team() {
  const team = [
    {
      name: "Sivani K U",
      position: "President",
      tagline: "Mapping minds and guiding stars where Earth meets the cosmos",
      link: "/images/team/sivani.jpg",
      tag: "purple",
    },
    {
      name: "Bala Sabarish S H",
      position: "Vice President & Corporate Relations Executive",
      tagline: "It's not who I'm underneath, but what I do that defines me",
      link: "/images/team/sabarish.jpg",
      tag: "grey",
    },
    {
      name: "Arthi S",
      position: "QAC Executive",
      tagline: "From stargazers to space thinkers — discover the universe with us",
      link: "/images/team/arthi.jpg",
      tag: "purple",
    },
    {
      name: "Swarnalatha N",
      position: "HR & Operations Executive",
      tagline: "From marching under the sun to exploring under the stars",
      link: "/images/team/swarnalatha.jpg",
      tag: "purple",
    },
    {
      name: "Thema E S",
      position: "Content Creation Executive",
      tagline: "Space teaches us that even in vast unknowns, meaning exists",
      link: "/images/team/thema.jpg",
      tag: "green",
    },
    {
      name: "Ashvika G M",
      position: "Event Executive",
      tagline: "Somewhere, something incredible is waiting to be known",
      link: "/images/team/ashvika.jpg",
      tag: "green",
    },
    {
      name: "Vidya Devi",
      position: "Workshop Executive",
      tagline: "Let the cosmos calm your chaos",
      link: "/images/team/vidya.jpg",
      tag: "purple",
    },
    {
      name: "Shewak N",
      position: "Design Executive",
      tagline: "Everything is nothing, with a twist",
      link: "/images/team/shewak.jpg",
      tag: "purple",
    },
    {
      name: "Riginsta A",
      position: "Media & Communication Executive",
      tagline: "Tiny particles hold the endless cosmos together",
      link: "/images/team/riginsta.jpg",
      tag: "purple",
    },
    {
      name: "Monika Devi E",
      position: "Astro Content & Newsletter",
      tagline: "Writing is my stage, words are my performance",
      link: "/images/team/monika.jpg",
      tag: "purple",
    },
    {
      name: "Kannan S A",
      position: "Content & Newsletter",
      tagline: "Observe like a black hole",
      link: "/images/team/sa.jpg",
      tag: "grey",
    },
    {
      name: "Mathan Sri V",
      position: "Workshop Executive",
      tagline: "Cosmos is our compass",
      link: "/images/team/mathan.jpg",
      tag: "grey",
    },
    {
      name: "Nandhana R",
      position: "Outreach Executive",
      tagline: "Bringing the universe closer",
      link: "/images/team/nandhana.jpg",
      tag: "grey",
    },
    {
      name: "Muthusankar A K",
      position: "Events Executive",
      tagline: "Humanity’s greatest ideas live between space and physics",
      link: "/images/team/muthusankar.jpg",
      tag: "grey",
    },
    {
      name: "Rajanandhini M",
      position: "Workshop Executive",
      tagline: "Curious minds, endless skies",
      link: "/images/team/rajanandhini.jpg",
      tag: "grey",
    },
    {
      name: "Kashika V",
      position: "Events Executive",
      tagline: "From Earth to the infinite",
      link: "/images/team/kashika.jpg",
      tag: "grey",
    },
    {
      name: "Eshaanjana S",
      position: "HR Executive",
      tagline: "Launch with courage, orbit with confidence",
      link: "/images/team/eshaanjana.jpg",
      tag: "grey",
    },
    {
      name: "Archana V",
      position: "Events Executive",
      tagline: "Life is short, make it sweet",
      link: "/images/team/archana.jpg",
      tag: "grey",
    },
    {
      name: "Meganath Vishwa M",
      position: "Design Executive",
      tagline: "Something incredible is always waiting to be known",
      link: "/images/team/meganath.jpg",
      tag: "grey",
    },
    {
      name: "Akash Rajan R",
      position: "HR Executive",
      tagline: "Turning stargazing into star-reaching",
      link: "/images/team/akash.jpg",
      tag: "grey",
    },
    {
      name: "Siddhesswar M",
      position: "Outreach Executive",
      tagline: "Never tell me the odds",
      link: "/images/team/siddhesswar.jpg",
      tag: "grey",
    },
    {
      name: "Surya M",
      position: "Marketing & Social Media",
      tagline: "Sailing into uncharted waters",
      link: "/images/team/surya.jpg",
      tag: "grey",
    },
    {
      name: "Lalitha Banu R",
      position: "Space Observation",
      tagline: "Curiosity at cosmic scale",
      link: "/images/team/lalitha.jpg",
      tag: "grey",
    },
    {
      name: "Mohit Shyam Y E",
      position: "Projects Executive",
      tagline: "Aim beyond the stars — limits don’t exist",
      link: "/images/team/mohit.jpg",
      tag: "grey",
    },
    {
      name: "Pon Ajith Kumar P",
      position: "Projects Executive",
      tagline: "Turning space curiosity into code",
      link: "/images/team/pon.jpg",
      tag: "grey",
    },
    {
      name: "Infant Riny Sandhiya A",
      position: "Marketing & Media",
      tagline: "Marketing the magic of the universe",
      link: "/images/team/infant.jpg",
      tag: "grey",
    },
    {
      name: "Kavya Isaimozhi J R",
      position: "QAC Executive",
      tagline: "Turning standards into smooth events",
      link: "/images/team/kavya.jpg",
      tag: "grey",
    },
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
