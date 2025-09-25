"use client";
import Link from "next/link";

export default function NewsletterPage() {
  const newsletters = [
    {
      title: "September 2025 Newsletter",
      date: "September 2025",
      description:
        "Explore the latest edition of the AstroClub Newsletter, featuring Cinema Corner, Science Features, and Mission Watch.",
      fileId: "1XeTP-45g5WfuJ6WC0wwjaDiw66oTfqp8", // Google Drive file ID
    },
    // Add more issues here
  ];

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
      <div className="relative z-10 w-full max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-lime-400">
          AstroClub Newsletter 🚀
        </h1>

        <p className="mb-10 text-gray-200 text-lg text-center">
          Explore our monthly newsletters and enjoy Cinema Corner, Science Features, and Mission Watch.
        </p>

        <ul className="space-y-8">
          {newsletters.map((nl, idx) => (
            <li
              key={idx}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-lime-300">{nl.title}</h2>
                <span className="text-sm text-gray-400 italic">{nl.date}</span>
              </div>

              <p className="text-gray-300 mb-6">{nl.description}</p>

              {/* PDF Viewer */}
              <div className="w-full border border-gray-600 rounded-lg mb-6 h-96">
                <iframe
                  src={`https://drive.google.com/file/d/${nl.fileId}/preview`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay"
                  title={nl.title}
                ></iframe>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`https://drive.google.com/file/d/${nl.fileId}/view`}
                  target="_blank"
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center"
                >
                  📖 Read Fullscreen
                </Link>
                <a
                  href={`https://drive.google.com/uc?export=download&id=${nl.fileId}`}
                  download
                  className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-center"
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
