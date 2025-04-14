
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import InstallSection from '@/components/sections/InstallSection';
import FeedbackSection from '@/components/sections/FeedbackSection';
import ContactSection from '@/components/sections/ContactSection';
import AboutUsSection from '@/components/sections/AboutUsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <InstallSection />
        <FeedbackSection />
        <ContactSection />
        <AboutUsSection />
        {/*<LegalSection />*/}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
