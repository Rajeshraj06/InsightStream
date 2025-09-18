import React from 'react';
import { Zap } from 'lucide-react';

const BreakingNews: React.FC = () => {
  const breakingNews = [
    "Global climate summit reaches historic agreement on emission cuts",
    "Tech giant announces revolutionary quantum computing breakthrough",
    "International markets respond to new economic policies",
    "Scientists discover potential cure for rare genetic disorder",
    "Major cyber security incident affects millions of users worldwide"
  ];

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 px-4 font-semibold whitespace-nowrap">
          <Zap className="h-4 w-4 text-yellow-300" />
          <span className="text-sm">BREAKING NEWS</span>
        </div>
        <div className="animate-scroll">
          <div className="flex space-x-8 text-sm">
            {breakingNews.map((news, index) => (
              <span key={index} className="whitespace-nowrap">
                • {news}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;