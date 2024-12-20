import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white-smoke mb-16">
          Contact <span className="text-brand-primary">Us Today</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="section-fade">
            <h3 className="text-2xl font-semibold text-white-smoke mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center text-brand-secondary">
                <Mail className="w-5 h-5 mr-3 text-brand-primary" />
                <span>contact@precision.example</span>
              </div>
              <div className="flex items-center text-brand-secondary">
                <Phone className="w-5 h-5 mr-3 text-brand-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-brand-secondary">
                <MapPin className="w-5 h-5 mr-3 text-brand-primary" />
                <span>123 Engineering Ave, Industrial District</span>
              </div>
            </div>
          </div>
          
          <form className="section-fade space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 border border-brand-secondary/20 rounded-lg focus:border-brand-primary focus:outline-none text-white-smoke"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 border border-brand-secondary/20 rounded-lg focus:border-brand-primary focus:outline-none text-white-smoke"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-gray-900 border border-brand-secondary/20 rounded-lg focus:border-brand-primary focus:outline-none text-white-smoke"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-brand-primary text-black py-3 rounded-lg font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}