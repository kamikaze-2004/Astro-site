"use client";
import { FadeInWhenVisible } from "./FadeInVisible";

export function APODSection({ isLoading, apodData }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-400"></div>
      </div>
    );
  }

  if (!apodData) {
    return (
      <div className="text-center text-red-400">
        <p>Unable to load APOD data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <FadeInWhenVisible>
        <div className="flex justify-center">
          {apodData.media_type === "image" ? (
            <img
              className="max-w-full h-auto max-h-[70vh] rounded-lg shadow-2xl"
              src={apodData.url}
              alt={apodData.title}
            />
          ) : (
            <iframe
              src={apodData.url}
              title={apodData.title}
              className="w-full max-w-4xl aspect-video rounded-lg shadow-2xl"
            />
          )}
        </div>
      </FadeInWhenVisible>
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">{apodData.title}</h3>
        <p className="text-gray-300">{formatDate(apodData.date)}</p>
        <p className="text-md leading-relaxed">{apodData.explanation}</p>
      </div>
    </div>
  );
}