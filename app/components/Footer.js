'use client';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-base-300 text-base-content">
      {/* Top CTA Strip */}
      <div className="bg-primary text-primary-content">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Let’s move your cargo smarter.</h3>
            <p className="opacity-90 text-sm">Talk to our logistics specialists today.</p>
          </div>
          <button className="btn btn-lg bg-white text-primary hover:bg-primary hover:text-white border-2 border-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => scrollToSection('contact')}>
            Get a Callback
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🌐</span>
              <span className="font-bold text-lg">BlueMarg Global</span>
            </div>
            <p className="text-sm opacity-70">Smarter Logistics for a Connected World</p>
          </div>

          <div>
            <h3 className="footer-title">Company</h3>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('about')} className="link link-hover">About</a></li>
              <li><a href="/faq" className="link link-hover">FAQ</a></li>
              <li><a href="/privacy" className="link link-hover">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection('services')} className="link link-hover">Stevedoring</a></li>
              <li><a onClick={() => scrollToSection('services')} className="link link-hover">Vessel Chartering</a></li>
              <li><a onClick={() => scrollToSection('services')} className="link link-hover">CHA Services</a></li>
              <li><a onClick={() => scrollToSection('services')} className="link link-hover">Rail Linkage</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="space-y-2">
              <li>New Delhi, India</li>
              <li>+91 97299 13232</li>
              <li>+91 95825 75277</li>
              
              <li>connect@bluemarg.com</li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pb-6">
          <p className="text-sm">© 2025 BlueMarg Global. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="btn btn-sm btn-outline">LinkedIn</a>
            <a className="btn btn-sm btn-outline">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
