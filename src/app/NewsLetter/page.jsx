"use client";
import Link from "next/link";

export default function NewsletterPage() {
  const newsletters = [
    {
      title: "September 2025 Newsletter",
      date: "September 2025",
      description:
        "Highlights of September: Stargazing event, ISS tracking session, and new AstroClub projects 🚀.",
      file: "/newsletter/September-2025.pdf",
    },
    // Add more issues here
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 min-w-full text-white p-4 md:p-8 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/iss.jpg"
          alt="space background"
          className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-lime-400">
          AstroClub Newsletter 🚀
        </h1>

        <p className="mb-10 text-gray-200 text-lg text-center">
          Explore our monthly newsletters and stay updated with events,
          observations, and astronomy insights.
        </p>

        <ul className="space-y-8">
          {newsletters.map((nl, idx) => (
            <li
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-lime-300">{nl.title}</h2>
                <span className="text-sm text-gray-400 italic">{nl.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{nl.description}</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={nl.file}
                  target="_blank"
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md text-center"
                >
                  📖 Read Newsletter
                </Link>
                <a
                  href={nl.file}
                  download
                  className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md text-center"
                >
                  ⬇️ Download PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
