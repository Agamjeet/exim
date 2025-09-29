"use client";

import { useRef } from "react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "🎖️",
      title: "14+ Years Experience",
      description: "Navy & Port Operations expertise"
    },
    {
      icon: "🪟",
      title: "Single-Window Model",
      description: "Avoid delays & multiple vendors"
    },
    {
      icon: "💰",
      title: "Competitive Rates",
      description: "Market-leading pricing"
    },
    {
      icon: "⚡",
      title: "Guaranteed KPIs",
      description: "48 hrs* discharge & evacuation"
    }
  ];

  // Spotlight effect removed per request

  // Card-only spotlight (section-wide spotlight removed per feedback)

  return (
    <section className="py-20 bg-primary text-primary-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <h3 className="text-2xl font-semibold mb-4">Offers One-Contract Model vs Fragmented Providers</h3>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <GlowCard key={index}>
              <div className="items-center text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="card bg-base-100 text-base-content max-w-2xl mx-auto">
            <div className="card-body">
              <h4 className="text-xl font-semibold mb-2">What our clients value</h4>
              <ul className="text-left list-disc list-inside text-sm opacity-90 space-y-1">
                <li>Single‑window coordination with clear KPIs</li>
                <li>Transparent pricing and proactive updates</li>
                <li>Faster turnaround with measurable outcomes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="divider m-0 opacity-40"></div>
          <p className="mt-3 text-[11px] leading-relaxed text-primary-content/80 text-center italic">
            * Terms and conditions apply. KPIs are indicative and may vary based on port conditions, weather,
            berth availability, customs clearance, and client readiness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
 
// Lightweight per-card glow inspired by the provided snippet
function GlowCard({ children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative group bg-white/5 border border-white/10 rounded-xl p-6 text-left transition-shadow duration-300 shadow-sm hover:shadow-xl cursor-default overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.15), transparent 40%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
