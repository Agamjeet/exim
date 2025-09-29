const ServicesSection = () => {
  const services = [
    {
      icon: "🚢",
      title: "Stevedoring",
      description: "Handling bulk iron ore & cargo discharge with optimized manpower & equipment, reducing vessel idle time.",
      image: "bend.png"
    },
    {
      icon: "⚓",
      title: "Vessel Chartering",
      description: "Arranging Capesize, Supramax & Panamax vessels at competitive rates, ensuring timely movement.",
      image: "/2.jpg"
    },
    {
      icon: "📋",
      title: "CHA Services",
      description: "Seamless customs clearance, accurate documentation, proactive coordination.",
      image: "/cha.png"
    },
    {
      icon: "🚂",
      title: "Rail Linkage",
      description: "Dedicated rail rakes + last-mile trucking from ports to steel plants (e.g., JSW) for on-time delivery.",
      image: "/train.jpg"
    },
    // {
    //   icon: "🌍",
    //   title: "Trade & Exports",
    //   description: "End-to-end export solutions for dry bulk cargo including minerals, agricultural products, and fertilizers to global markets.",
    //   image: "/5.jpg"
    // }
  ];

  return (
    <section id="services" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Core Services</h2>
          <p className="text-xl text-base-content/70">Comprehensive logistics solutions tailored for your needs</p>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group card bg-base-100 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-xl h-64 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Background image */}
              {service.image && (
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              {/* Gradient overlays: subtle base + darker on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300 bg-gradient-to-br from-sky-700/50 via-cyan-600/40 to-teal-500/30"></div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gradient-to-br from-sky-900/70 via-cyan-900/60 to-teal-900/60"></div>

              <div className="card-body relative z-[1] h-full flex flex-col justify-end p-6">
                {/* Always visible title */}
                <h3 className="card-title text-white font-semibold tracking-wide transition-colors duration-300 drop-shadow-md">{service.title}</h3>

                {/* Reveal details on hover */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-300 overflow-hidden">
                  <div className="text-4xl my-2">{service.icon}</div>
                  <p className="text-sm text-white/90 transition-colors duration-300">{service.description}</p>
                  <div className="mt-3">
                    <p className="text-xs text-white/80">
                      Efficient coordination with measurable KPIs. Learn more →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
