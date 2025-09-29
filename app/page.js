import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ChallengesSection from './components/ChallengesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import BundledServicesSection from './components/BundledServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
  
      <ServicesSection />
      <AboutSection />
      <ChallengesSection />
      <WhyChooseUsSection />
      <BundledServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
