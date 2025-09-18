import React from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import BreakingNews from './components/BreakingNews';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import NewsGrid from './components/NewsGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BreakingNews />
        <Navigation />
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsGrid />
            </div>
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;