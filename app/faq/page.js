'use client';

import Navigation from '../components/Navigation';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function FAQPage() {
  useEffect(() => {
    // Update page title
    document.title = "FAQ - BlueMarg Global";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
