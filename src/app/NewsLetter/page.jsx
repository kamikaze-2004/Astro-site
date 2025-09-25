"use client";
import Link from "next/link";

export default function NewsletterPage() {
  // List your newsletters here
  const newsletters = [
    { title: "September 2025 Newsletter", file: "/newsletter/september-2025.pdf" }
    // Add more monthly newsletters here
  ];

  return (
    <main className="pt-24 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">AstroClub Newsletter 🚀</h1>
      <p className="mb-6 text-gray-700">
        View and download our monthly newsletters to stay updated with AstroClub events and astronomy insights.
      </p>

      <ul className="space-y-6">
        {newsletters.map((nl, idx) => (
          <li key={idx} className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{nl.title}</h2>

            {/* PDF Viewer */}
            <iframe
              src={nl.file}
              className="w-full h-64 border mb-2"
              title={nl.title}
            ></iframe>

            <div className="flex gap-4">
              {/* Open in new tab */}
              <Link
                href={nl.file}
                target="_blank"
                className="text-blue-600 underline"
              >
                View Fullscreen
              </Link>

              {/* Download */}
              <a
                href={nl.file}
                download
                className="text-green-600 underline"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}


