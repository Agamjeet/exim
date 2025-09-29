const ChallengesSection = () => {
  const challenges = [
    {
      title: "Complex Supply Chains",
      description: "Managing multiple touchpoints across different stakeholders and geographies"
    },
    {
      title: "Fragmented Services",
      description: "Multiple vendors leading to delays and higher operational costs"
    },
    {
      title: "Demurrage & Congestion Risks",
      description: "Port congestion and vessel delays causing significant financial impact"
    },
    {
      title: "Limited Accountability",
      description: "Lack of single-point responsibility across multiple service providers"
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-error">The Challenges in Bulk Cargo Logistics</h2>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div key={index} className="card bg-error/10 border border-error/20">
              <div className="card-body">
                <h3 className="card-title text-error">{challenge.title}</h3>
                <p>{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
