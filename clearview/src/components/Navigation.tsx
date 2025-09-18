import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: 'World',
      subcategories: ['International', 'Conflicts', 'Diplomacy', 'Global Economy']
    },
    {
      name: 'Politics',
      subcategories: ['Elections', 'Policy', 'Government', 'Democracy']
    },
    {
      name: 'Business',
      subcategories: ['Markets', 'Companies', 'Economy', 'Startups']
    },
    {
      name: 'Technology',
      subcategories: ['AI & ML', 'Software', 'Hardware', 'Internet']
    },
    {
      name: 'Science',
      subcategories: ['Research', 'Medical', 'Space', 'Environment']
    },
    {
      name: 'Sports',
      subcategories: ['Football', 'Basketball', 'Olympics', 'Soccer']
    },
    {
      name: 'Entertainment',
      subcategories: ['Movies', 'Music', 'TV Shows', 'Celebrity']
    },
    {
      name: 'Health',
      subcategories: ['Medical News', 'Wellness', 'Nutrition', 'Mental Health']
    }
  ];

  return (
    <nav className="bg-slate-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-slate-300 hover:text-white py-3 text-sm font-medium transition-colors">
                  <span>{category.name}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                {/* Dropdown */}
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      {category.subcategories.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full">
            <select className="bg-slate-700 text-white border border-slate-600 rounded px-3 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select Category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;