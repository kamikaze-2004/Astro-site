"use client";
import Link from "next/link";

export default function NewsletterPage() {
  const newsletters = [
    { title: "September 2025 Newsletter", file: "/newsletter/September-2025.pdf" },
    // Add more newsletters here
  ];

  return (
    <main
      className="pt-24 p-6 max-w-5xl mx-auto min-h-screen text-gray-200 relative"
      style={{
        backgroundImage: "url('/images/space.jpg')", // <-- your image here
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 text-white">
          AstroClub Newsletter 🚀
        </h1>

        <p className="mb-6 text-gray-300 text-lg font-medium">
          View and download our monthly newsletters to stay updated with AstroClub
          events and astronomy insights.
        </p>

        <ul className="space-y-6">
          {newsletters.map((nl, idx) => (
            <li
              key={idx}
              className="border border-gray-700 p-4 rounded-lg shadow-md bg-gray-900/80"
            >
              <h2 className="text-xl font-semibold mb-3 text-white">
                {nl.title}
              </h2>

              {/* PDF Viewer */}
              <iframe
                src={nl.file}
                className="w-full h-80 border border-gray-600 mb-3 rounded"
                title={nl.title}
              ></iframe>

              {/* Links */}
              <div className="flex gap-6">
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
    </main>
  );
}
