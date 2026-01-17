"use client";
import Image from "next/image";

export default function AstroProjectsPage() {
  const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Astro Project ${i + 1}`,
    image: `/images/projects/${i + 1}.jpeg`,
  }));

  return (
    <div className="relative min-h-screen bg-gray-900 min-w-full text-white p-4 md:p-8 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/space.jpg"
          alt="space background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Page content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-lime-400">
          Astro Projects 🌌
        </h1>

        <p className="mb-10 text-gray-200 text-lg text-center">
          A glimpse into the creativity, innovation, and exploration by AstroClub members
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl overflow-hidden"
            >
              {/* Image container */}
              <div className="relative w-full h-64 bg-black flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-xl font-semibold text-lime-300">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
