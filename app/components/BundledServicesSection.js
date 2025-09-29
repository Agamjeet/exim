const BundledServicesSection = () => {
  const steps = [
    {
      number: "1",
      title: "Port Arrival",
      description: "Vessel docking & documentation"
    },
    {
      number: "2",
      title: "Discharge Operations",
      description: "Optimized cargo handling"
    },
    {
      number: "3",
      title: "Rail Linkage",
      description: "Dedicated transport coordination"
    },
    {
      number: "4",
      title: "Plant Delivery",
      description: "Final destination delivery"
    }
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Bundled Logistics. One Contract. Complete Control.</h2>
          <p className="text-xl text-base-content/70">
            Our single-window model helps clients avoid coordination hassles and reduces total  with guaranteed KPIs.
          </p>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="badge badge-primary badge-lg">{step.number}</div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-base-content/70">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-title">Turnaround Time</div>
                      <div className="stat-value text-primary">48hrs</div>
                      {/* <div className="stat-desc">Guaranteed</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BundledServicesSection;
