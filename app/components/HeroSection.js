'use client';

import Image from 'next/image';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

// Data for cycling images and taglines - 2 images only
const heroData = [
  {
    image: "/ship2.png",
    tagline: "From Mines to Markets",
    alt: "Port Operations"
  },
  {
    image: "/trans.jpg",
    tagline: "Connecting Continents",
    alt: "Global Shipping"
  }
];

const HeroSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Refs for GSAP animations
  const imageRef = useRef(null);
  const nextImageRef = useRef(null);
  const dotsRef = useRef([]);

  // GSAP animation function for smooth crossfade transitions
  const animateTransition = useCallback((newIndex) => {
    const tl = gsap.timeline();
    
    // Set up the next image behind the current one
    gsap.set(nextImageRef.current, {
      opacity: 0,
      scale: 1.05
    });
    
    // Update the next image source
    nextImageRef.current.src = heroData[newIndex].image;
    nextImageRef.current.alt = heroData[newIndex].alt;
    
    // Start crossfade - both images animate simultaneously
    tl.to(imageRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .to(nextImageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.8")
    // Update content and swap images
    .call(() => {
      setCurrentIndex(newIndex);
      // Swap the refs
      const temp = imageRef.current;
      imageRef.current = nextImageRef.current;
      nextImageRef.current = temp;
    });
    
    return tl;
  }, []);

  // Initial setup and auto-cycle
  useEffect(() => {
    // Set initial states for GSAP
    gsap.set(imageRef.current, { opacity: 1, scale: 1 });
    gsap.set(nextImageRef.current, { opacity: 0, scale: 1.05 });
    
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % heroData.length;
      animateTransition(nextIndex);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, animateTransition]);

  // Animate dots on current index change
  useEffect(() => {
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.to(dot, {
          scale: index === currentIndex ? 1.25 : 1,
          backgroundColor: index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  }, [currentIndex]);

  // Smooth scroll function to navigate to different sections
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero min-h-screen relative">
      {/* Background Image with Blue Gradient Overlay */}
      <div className="absolute inset-0">
        {/* Main background image - cycling through different images */}
        <Image
          ref={imageRef}
          src={heroData[currentIndex].image}
          alt={heroData[currentIndex].alt}
          fill
          className="object-cover"
          priority={currentIndex === 0}
        />
        {/* Next image for crossfade effect */}
        <Image
          ref={nextImageRef}
          src={heroData[(currentIndex + 1) % heroData.length].image}
          alt={heroData[(currentIndex + 1) % heroData.length].alt}
          fill
          className="object-cover opacity-0"
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
          Delivering Global Trade, Seamlessly
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
          <p className="text-lg md:text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)', marginTop: '3rem' }}>
            Pioneering Bulk & Container Cargo Logistics Across Oceans
          </p>
          
          {/* Quote line underneath pioneering line - static tagline */}
          {/* <p className="text-lg md:text-xl font-bold text-white/90 mt-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            From Mines to Markets
          </p> */}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroData.map((_, index) => (
          <button
            key={index}
            ref={el => dotsRef.current[index] = el}
            onClick={() => {
              if (index !== currentIndex) {
                animateTransition(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
