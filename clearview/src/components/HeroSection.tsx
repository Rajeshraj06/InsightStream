import React, { useState } from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleModal from './ArticleModal';
import { Article } from '../types';

const HeroSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const featuredStory = articles[0]; // Use first article as featured
  const trendingNews = articles.slice(1, 6); // Use next 5 articles as trending

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const getRelatedArticles = (currentArticle: Article): Article[] => {
    return articles
      .filter(article => 
        article.id !== currentArticle.id && 
        currentArticle.relatedArticles.includes(article.id)
      )
      .slice(0, 3);
  };

  return (
    <>
      <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Story */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="bg-teal-600 px-3 py-1 rounded-full text-xs font-medium">
                      {featuredStory.category}
                    </span>
                    <div className="flex items-center space-x-1 text-sm">
                      <Clock className="h-3 w-3" />
                      <span>{featuredStory.timeAgo}</span>
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                    {featuredStory.title}
                  </h1>
                  <p className="text-gray-200 mb-4 text-sm md:text-base leading-relaxed">
                    {featuredStory.description}
                  </p>
                  <button
                    onClick={() => handleReadMore(featuredStory)}
                    className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Headlines */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="h-5 w-5 text-red-600" />
                <h2 className="text-xl font-bold text-gray-900">Trending Now</h2>
              </div>
              <div className="space-y-4">
                {trendingNews.map((news, index) => (
                  <article
                    key={news.id}
                    className="group cursor-pointer"
                    onClick={() => handleReadMore(news)}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center mt-1">
                        {index + 1}
                      </span>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors text-sm leading-tight mb-2">
                          {news.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="bg-gray-200 px-2 py-1 rounded">
                            {news.category}
                          </span>
                          <span>{news.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <ArticleModal
        article={selectedArticle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        relatedArticles={selectedArticle ? getRelatedArticles(selectedArticle) : []}
      />
    </>
  );
};

export default HeroSection;