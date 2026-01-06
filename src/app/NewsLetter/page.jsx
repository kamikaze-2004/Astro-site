"use client";

export default function NewsletterPage() {
  const newsletters = [
    { title: "September 2025 Newsletter" },
    { title: "October 2025 Newsletter" },
    { title: "November 2025 Newsletter" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-10">DEBUG TEST</h1>

      {newsletters.map((nl, index) => (
        <div
          key={index}
          className="border-4 border-red-500 p-6 mb-6 text-xl"
        >
          🔴 {nl.title}
        </div>
      ))}
    </div>
  );
}



