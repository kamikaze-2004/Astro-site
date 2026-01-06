"use client";
import Link from "next/link";

export default function NewsletterPage() {
  const newsletters = [
    {
      title: "September 2025 Newsletter",
      date: "September 2025",
      description:
        "Explore the latest edition of the AstroClub Newsletter, featuring Cinema Corner, Science Features, and Mission Watch.",
      fileId: "12f9AmrlHo81L5ZxiEmDN0cKMMB4au-pK",
    },
    {
      title: "October 2025 Newsletter",
      date: "October 2025",
      description:
        "Explore the latest edition of the AstroClub Newsletter, featuring President's & Vice President's note, Student Articles, and Events.",
      fileId: "1hqyEVlDiXTt40xYSqT-TnXyI8D_AXvjE",
    },
    {
      title: "November 2025 Newsletter",
      date: "November 2025",
      description:
        "Explore the latest edition of the AstroClub Newsletter, featuring Events Head & HR Head note, Student Articles, and Cinema Corner.",
      fileId: "1qdQRvCAbeXJ_DxP9sKJXJSsFxdapycjJ",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 w-full text-white p-4 md:p-8 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="/images/space.jpg"
          alt="space background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-lime-400">
          AstroClub Newsletter 🚀
        </h1>

        <p className="mb-10 text-gray-200 text-lg text-center">
          Stay inspired and journey through the stars with every edition!
        </p>

        <ul className="space-y-8">
          {newsletters.map((nl) => (
            <li
              key={nl.fileId}
              className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-2xl font-bold text-lime-300">
                  {nl.title}
                </h2>
                <span className="text-sm text-gray-400 italic">
                  {nl.date}
                </span>
              </div>

              <p className="text-gray-300 mb-6">{nl.description}</p>

              {/* PDF Preview */}
              <div className="w-full h-96 border border-gray-600 rounded-lg overflow-hidden mb-6">
                <iframe
                  key={nl.fileId}
                  src={`https://drive.google.com/file/d/${nl.fileId}/preview`}
                  className="w-full h-full"
                  allow="autoplay"
                  title={nl.title}
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`https://drive.google.com/file/d/${nl.fileId}/view`}
                  target="_blank"
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold text-center"
                >
                  📖 Read Fullscreen
                </Link>

                <a
                  href={`https://drive.google.com/uc?export=download&id=${nl.fileId}`}
                  className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 font-semibold text-center"
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

