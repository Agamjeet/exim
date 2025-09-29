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
          src="/ship2.png"
          alt="Port Operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/60 via-blue-500/50 to-blue-600/40"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content text-center relative z-10" style={{ marginTop: '-8vw' }}>
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5">
            BlueMarg Global
          </h1>
          <h2 className="text-lg md:text-3xl font-semibold text-white" style={{ marginBottom: '15vw' }}>
          "Delivering Global Trade, Seamlessly."
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10" style={{ marginTop: '11.25vw' }}>
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
          <p className="text-lg md:text-xl font-bold text-white/90">
            "Pioneering Bulk Dry Cargo Shipments From Mines to Markets."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
