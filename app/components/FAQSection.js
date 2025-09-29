'use client';

const FAQSection = () => {
  const handleContactClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page and then scroll to contact section
      window.location.href = '/#contact';
    }
  };
  const faqs = [
    {
      question: "\u2002 What products does BlueMarg Global LLP export?",
      answer: "We specialize in bulk dry cargo shipments including iron ore, coal, and other minerals from mines to markets worldwide."
    },
    {
      question: "\u2002 How can I get a quote or place an order?",
      answer: "Contact us directly through our website or call our team. We'll provide detailed quotes based on your specific requirements and cargo specifications."
    },
    {
      question: "\u2002 Do you handle end‑to‑end logistics?",
      answer: "Yes, we offer complete logistics solutions including stevedoring, vessel chartering, customs clearance, rail linkage, and last-mile delivery to your facility."
    },
    {
      question: "\u2002 Can BlueMarg Global arrange third‑party inspections and certifications?",
      answer: "Absolutely. We coordinate with certified inspection agencies and ensure all necessary certifications are obtained for your cargo shipments."
    },
    {
      question: "\u2002 What is your minimum order quantity (MOQ)?",
      answer: "MOQs vary by product category, but we remain flexible for pilot orders. Contact us with your requirements, and we'll structure a solution that fits your volume and budget."
    },
    {
      question: "\u2002 How does BlueMarg Global ensure product quality and safety?",
      answer: "We implement multi‑stage quality checks—at the source, during processing, and pre‑shipment—backed by lab testing and full traceability throughout the supply chain."
    },
    {
      question: "\u2002 Which Incoterms do you support?",
      answer: "We work with EXW, FOB, CFR, CIF, DDP, and DAP, allowing you to choose the risk and cost split that best suits your supply‑chain strategy."
    },
    {
      question: "\u2002 Do you offer private‑label or white‑label services?",
      answer: "Yes. Our logistics team can create custom handling solutions, packaging formats, and documentation tailored to your target market's regulations and preferences."
    },
    {
      question: "\u2002 What payment terms are available?",
      answer: "Standard terms include LC at sight, CAD, DP, and T/T (30% advance, 70% against BL). We can discuss alternate arrangements for long‑term clients."
    },
    {
      question: "\u2002 How long does it take to ship after order confirmation?",
      answer: "Typical lead times range from 2–4 weeks for ready stock and 4–6 weeks for custom or seasonal products. Express air freight is available for urgent loads."
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-base-content/70">Everything you need to know about our logistics services</p>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow bg-base-200 shadow-lg rounded-xl">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-semibold text-primary pl-10 pr-6">
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className="text-base-content/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="card bg-primary text-primary-content max-w-2xl mx-auto">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-4">Still have questions?</h3>
              <p className="text-lg mb-6">Our logistics experts are here to help you with any specific requirements.</p>
              <div className="card-actions justify-center">
                <button 
                  onClick={handleContactClick}
                  className="btn btn-lg bg-white text-primary hover:bg-primary hover:text-white border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
