const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Who We Are</h3>
            <p className="text-lg leading-relaxed mb-4">
              BlueMarg Global LLP is a trusted partner in international trade and logistics. We focus on 
              <span className="font-semibold"> dry‑bulk cargo</span>: minerals (iron ore, coal, baryte), agricultural products (grains, rice, sugar),
              and fertilisers — delivering end‑to‑end movement from mines and farms to ports and plants.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our team brings strong, diverse experience across <span className="font-semibold">global markets</span>, end‑to‑end sourcing,
              logistics management and international compliance. Backed by <span className="font-semibold">14+ years of leadership experience in the Indian Navy and port operations</span>,
              we combine ethical sourcing, sustainable practices and tech‑enabled operations to keep your
              business agile, scalable and competitive.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="badge badge-primary badge-lg">✓</div>
                <div>
                  <h4 className="font-semibold">Global Markets & Sourcing</h4>
                  <p className="text-sm text-base-content/70">Reliable supply with vetted producers and partners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary badge-lg">✓</div>
                <div>
                  <h4 className="font-semibold">Compliance & Logistics Management</h4>
                  <p className="text-sm text-base-content/70">Documentation, certifications and multi‑modal movement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary badge-lg">✓</div>
                <div>
                  <h4 className="font-semibold">Ethical & Sustainable Practices</h4>
                  <p className="text-sm text-base-content/70">Transparent sourcing with measurable quality controls</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="badge badge-primary badge-lg">✓</div>
                <div>
                  <h4 className="font-semibold">Tech‑Enabled, Client‑First Support</h4>
                  <p className="text-sm text-base-content/70">Personalised assistance and real‑time coordination</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-primary mb-4">Capabilities Snapshot</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="stat bg-base-100 rounded-lg shadow p-3 text-center">
                  <div className="stat-title text-xs sm:text-sm">Experience</div>
                  <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">14+ yrs</div>
                  <div className="stat-desc text-xs">Leadership & operations</div>
                </div>
                <div className="stat bg-base-100 rounded-lg shadow p-3 text-center">
                  <div className="stat-title text-xs sm:text-sm">Turnaround</div>
                  <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">48 hrs</div>
                  <div className="stat-desc text-xs">Discharge & evacuation</div>
                </div>
                <div className="stat bg-base-100 rounded-lg shadow p-3 text-center">
                  <div className="stat-title text-xs sm:text-sm">Partners</div>
                  <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">30+</div>
                  <div className="stat-desc text-xs">Sourcing & logistics</div>
                </div>
                <div className="stat bg-base-100 rounded-lg shadow p-3 text-center">
                  <div className="stat-title text-xs sm:text-sm">Traceability</div>
                  <div className="stat-value text-primary text-xl sm:text-2xl lg:text-3xl">100%</div>
                  <div className="stat-desc text-xs">Docs & certifications</div>
                </div>
              </div>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="alert alert-info">
                  <span>Single‑window operations with measurable KPIs.</span>
                </div>
                <div className="alert alert-success">
                  <span>Compliance‑ready documentation & third‑party inspection.</span>
                </div>
                <div className="alert alert-warning">
                  <span>Multi‑modal connectivity: port, rail and last‑mile.</span>
                </div>
                <div className="alert alert-primary">
                  <span>Tech‑enabled tracking and proactive updates.</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="divider m-0 opacity-40"></div>
                <p className="mt-3 text-[11px] leading-relaxed text-base-content/60 text-center">
                  * Terms and conditions apply. KPIs are indicative and may vary based on port conditions, weather,
                  berth availability, customs clearance, and client readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
