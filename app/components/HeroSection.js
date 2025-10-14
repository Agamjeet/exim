'use client';

import Image from 'next/image';

const HeroSection = () => {
  // Smooth scroll function to navigate to different sections
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero min-h-screen relative">
      {/* Background Image with Blue Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Main background image - ship/port operations */}
        <Image
          src="/ship2.png"
          alt="Port Operations"
          fill
          className="object-cover"
          priority
        />
        {/* Blue gradient overlay for better text readability and brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/60 via-blue-500/50 to-blue-600/40"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="hero-content text-center relative z-10" style={{ marginTop: '-4vw' }}>
        <div className="max-w-4xl">
          {/* Main Company Title - Large, bold, white text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5">
            BlueMarg Global
          </h1>
          
          {/* Tagline with large bottom margin for spacing */}
          <h2 className="text-lg md:text-3xl font-semibold text-white" style={{ marginBottom: '15vw' }}>
          Delivering Global Trade, Seamlessly.
          </h2>
          
          {/* Call-to-Action Buttons with responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10" style={{ marginTop: '11.25vw' }}>
            {/* Primary CTA Button - "Get in Touch" */}
            <button 
              className="btn btn-lg bg-white text-primary hover:bg-primary hover:text-white border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
            
            {/* Secondary CTA Button - "Explore" */}
            <button 
              className="btn btn-lg bg-transparent text-white hover:bg-white hover:text-primary border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Explore
            </button>
          </div>
          
          {/* Pioneering Line - Company's core value proposition */}
          {/* <p className="text-lg md:text-xl font-bold text-white mt-30" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}> */}
          <p className="text-lg md:text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)', marginTop: '6rem' }}>
            Pioneering Bulk Dry Cargo Shipments.
          </p>
          
          {/* Quote line underneath pioneering line */}
          <p className="text-lg md:text-xl font-bold text-white/90 mt-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            &ldquo;From Mines to Markets&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
