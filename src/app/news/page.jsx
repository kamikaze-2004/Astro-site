"use client";
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;
  const TOTAL_ITEMS = 100;

  useEffect(() => {
    fetchNews();
  }, []);

  const handleNext= () =>
  {
    setCurrentPage((prev) => Math.max(prev + 1, 1));
    window.scrollTo(
        {
            top:0
        }
    )
  };

  const handlePrev = () =>
  {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo(
        {
            top:0
        }
    )
  }

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=${TOTAL_ITEMS}`
      );
      const data = await response.json();
      setNews(data.results.slice(0, TOTAL_ITEMS));
    } catch (err) {
      setError('Failed to fetch news');
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };


  const indexOfLastArticle = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ITEMS_PER_PAGE;
  const currentArticles = news.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="text-red-400 text-center text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-4 md:p-8 ">
        <div className="fixed inset-0 z-0">
        <img 
          src='/images/newspage.jpg'
          alt='aurora'
          className="w-full h-full object-cover opacity-80 bg-no-repeat z-0"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <h1 className="oswald relative mt-6 text-5xl font-bold mb-8 text-center text-lime-300">Space News</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className="bg-transparent backdrop-blur-sm border-2 border-white rounded-lg overflow-hidden transform-all scale-100 ease-in-out duration-300 hover:shadow-lg   hover:scale-105  hover:border-cyan-500 "
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image_url}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-news.jpg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">
                    {formatDate(article.published_at)} • {article.news_site}
                  </p>
                  <p className="text-white mb-4 line-clamp-3">
                    {article.summary}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-lime-300 hover:bg-lime-700 text-gray-950 px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center items-center mt-8 gap-4 ">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-transparent rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" /> Previous
            </button>
            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-transparent rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;