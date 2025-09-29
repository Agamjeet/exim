'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 800) {
        // Scrolling down and past 200px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar bg-base-100 text-primary shadow-lg sticky top-0 z-50 h-25 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-primary lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Logo */}
        <a className="cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src="/nav_2.png"
            alt="BlueMarg Global Navigation"
            className="h-35 sm:h-40 md:h-60 lg:h-70 w-auto pt-2 sm:pt-4 md:pt-6 lg:pt-10"
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => scrollToSection('home')} className="text-primary hover:text-primary/70 font-medium text-sm tracking-wide uppercase">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')} className="text-primary hover:text-primary/70 font-medium text-sm tracking-wide uppercase">
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('services')} className="text-primary hover:text-primary/70 font-medium text-sm tracking-wide uppercase">
              Services
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')} className="text-primary hover:text-primary/70 font-medium text-sm tracking-wide uppercase">
              Contact
            </a>
          </li>
          <li>
            <a href="/faq" className="text-primary hover:text-primary/70 font-medium text-sm tracking-wide uppercase">
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn btn-lg bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => scrollToSection('contact')}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navigation;
