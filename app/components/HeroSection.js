'use client';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero min-h-screen relative">
      {/* Background Image with Blue Gradient */}
      <div className="absolute inset-0">
        <img
          src="/ship.png"
          alt="Port Operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/60 via-blue-500/50 to-blue-600/40"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          {/* Logo behind text */}
          <div className="relative mb-6">
            <img
              src="/globe-photoroom.png"
              alt="BlueMarg Global Logo"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-64 h-64 md:w-80 md:h-80 opacity-100"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-white relative z-10">
              BlueMarg Global
            </h1>
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
            Smarter International Logistic Solutions for a connected world
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Pioneering Bulk Dry Cargo Shipments — From Mines to Markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-lg bg-white text-primary hover:bg-primary hover:text-white border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
            <button 
              className="btn btn-lg bg-transparent text-white hover:bg-white hover:text-primary border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
