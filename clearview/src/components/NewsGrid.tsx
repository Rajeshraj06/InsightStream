import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleModal from './ArticleModal';
import { Article } from '../types';

const NewsGrid: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(6);

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleArticles(prev => Math.min(prev + 6, articles.length));
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
      <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.slice(0, visibleArticles).map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Clock className="h-3 w-3" />
                  <span>{article.timeAgo}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {article.description}
                </p>
                <button
                  onClick={() => handleReadMore(article)}
                  className="flex items-center space-x-2 text-teal-600 font-medium hover:text-teal-700 transition-colors group/button"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {visibleArticles < articles.length && (
          <div className="text-center">
            <button
              onClick={handleLoadMore}
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Load More Articles
            </button>
          </div>
        )}
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

export default NewsGrid;