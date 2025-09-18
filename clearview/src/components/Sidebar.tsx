import React, { useState } from 'react';
import { TrendingUp, Mail, Cloud, Sun, CloudRain } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [email, setEmail] = useState('');

  const popularArticles = [
    {
      title: "Global Climate Summit Reaches Historic Agreement",
      views: "12.5K views",
      timeAgo: "2 hours ago"
    },
    {
      title: "Tech Revolution: AI Changes Everything",
      views: "8.9K views", 
      timeAgo: "4 hours ago"
    },
    {
      title: "Economic Markets Show Strong Recovery",
      views: "7.2K views",
      timeAgo: "6 hours ago"
    },
    {
      title: "Medical Breakthrough in Cancer Research",
      views: "6.8K views",
      timeAgo: "8 hours ago"
    },
    {
      title: "Space Exploration Reaches New Milestone",
      views: "5.9K views",
      timeAgo: "10 hours ago"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <aside className="space-y-8">
      {/* Popular Articles */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="h-5 w-5 text-red-600" />
          <h3 className="text-xl font-bold text-gray-900">Popular Articles</h3>
        </div>
        <div className="space-y-4">
          {popularArticles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gray-200 text-gray-600 text-xs font-bold rounded-full flex items-center justify-center mt-1">
                  {index + 1}
                </span>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors text-sm leading-tight mb-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.views}</span>
                    <span>{article.timeAgo}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-teal-600 rounded-xl shadow-md p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <Mail className="h-5 w-5" />
          <h3 className="text-xl font-bold">Stay Informed</h3>
        </div>
        <p className="text-teal-100 mb-4 text-sm">
          Get the latest news delivered straight to your inbox. Never miss an important story.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-teal-600 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Weather Widget */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Cloud className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-900">Weather</h3>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Sun className="h-8 w-8 text-yellow-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">22°C</div>
          <div className="text-sm text-gray-600 mb-4">Sunny - New York</div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <Sun className="h-4 w-4 text-yellow-500 mx-auto mb-1" />
              <div className="font-medium">Today</div>
              <div className="text-gray-600">22°C</div>
            </div>
            <div className="text-center">
              <CloudRain className="h-4 w-4 text-blue-500 mx-auto mb-1" />
              <div className="font-medium">Tomorrow</div>
              <div className="text-gray-600">18°C</div>
            </div>
            <div className="text-center">
              <Cloud className="h-4 w-4 text-gray-500 mx-auto mb-1" />
              <div className="font-medium">Friday</div>
              <div className="text-gray-600">20°C</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;