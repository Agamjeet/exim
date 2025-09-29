'use client';

import { useEffect, useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (url.searchParams.get('sent') === '1') {
      setSubmitted(true);
      url.searchParams.delete('sent');
      window.history.replaceState({}, '', url.pathname + url.hash);
      setTimeout(() => setSubmitted(false), 5000);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // Handled by FormSubmit; keep for consistency if needed
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Let&apos;s move your cargo smarter.</h2>
          <div className="divider w-24 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left info panel */}
          <div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body space-y-4">
                <h3 className="card-title text-2xl">Get in Touch</h3>
                <p className="text-base-content/80 leading-relaxed">
                  At BlueMarg Global LLP, we are dedicated to facilitating seamless international business and trade.
                  If you have any inquiries or would like to discuss potential collaboration opportunities, our team is here to assist you with
                  personalised, end‑to‑end solutions.
                </p>

                <div className="space-y-2">
                  <p className="text-sm">New Delhi, India</p>
                  <p className="text-sm"><span className="font-semibold">Phone:</span> <a className="link link-hover" href="tel:+919729913232">+91 97299 13232</a> · <a className="link link-hover" href="tel:+919582575277">+91 95825 75277</a></p>
                  <p className="text-sm"><span className="font-semibold">Email:</span> <a className="link link-hover" href="mailto:connect@bluemarg.com">connect@bluemarg.com</a></p>
                </div>

                <div className="pt-2 flex gap-3">
                  <a href="tel:+919729913232" className="btn btn-lg bg-transparent text-primary hover:bg-primary hover:text-white border-2 border-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">Call Now</a>
                  <a href="mailto:connect@bluemarg.com" className="btn btn-lg bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">Email Us</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title mb-6">Send us a Message</h3>
              {submitted && (
                <div className="alert alert-success">
                  <span>Thanks! We received your message and will get back to you shortly.</span>
                </div>
              )}
              {/* this is where the form is submitted to FormSubmit imp https://formsubmit.co/connect@bluemargglobal.com*/}
              <form action="https://formsubmit.co/connect@bluemargglobal.com" method="POST" className="space-y-4" onSubmit={handleSubmit}>
                {/* FormSubmit options per docs: https://formsubmit.co/documentation */}
                <input type="hidden" name="_subject" value="New inquiry from BlueMarg website" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="/?sent=1#contact" />
                <input type="text" name="_honey" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting BlueMarg Global. We will get back to you shortly." />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone (optional)</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 97XXXXXXXX"
                    className="input input-bordered" 
                  />
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us briefly how we can help..."
                    className="textarea textarea-bordered h-32" 
                    required
                  ></textarea>
                </div>
                
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-lg bg-primary text-white hover:bg-white hover:text-primary border-2 border-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
