import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ApplyModal } from '../components/ApplyModal';

export const About: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onApplyClick={() => setIsApplyModalOpen(true)} />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Hero subtitle="关于 TeenList" />
          <AboutSection onApplyClick={() => setIsApplyModalOpen(true)} />
        </div>
      </main>
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
    </div>
  );
};

