"use client";
import Link from "next/link";

export default function NewsletterPage() {
  const newsletters = [
    { title: "September 2025 Newsletter", file: "/newsletter/September-2025.pdf" },
    // Add more newsletters here
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 min-w-full text-white p-4 md:p-8 overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/space.jpg" // <-- same style as your other pages
          alt="space background"
          className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-lime-400">
          AstroClub Newsletter 🚀
        </h1>

        <p className="mb-8 text-gray-200 text-lg text-center">
          View and download our monthly newsletters to stay updated with AstroClub
          events and astronomy insights.
        </p>

        <ul className="space-y-6">
          {newsletters.map((nl, idx) => (
            <li
              key={idx}
              className="border border-gray-700 p-6 rounded-3xl shadow-lg bg-gray-900/80 backdrop-blur-md"
            >
              <h2 className="text-2xl font-semibold mb-4 text-white text-center">
                {nl.title}
              </h2>

              {/* PDF Viewer */}
              <iframe
                src={nl.file}
                className="w-full h-96 border border-gray-600 mb-4 rounded-lg"
                title={nl.title}
              ></iframe>

              {/* Links */}
              <div className="flex justify-center gap-8">
                <Link
                  href={nl.file}
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-500"
                >
                  View Fullscreen
                </Link>
                <a
                  href={nl.file}
                  download
                  className="text-green-400 underline hover:text-green-500"
                >
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
