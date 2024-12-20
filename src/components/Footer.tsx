import React from 'react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'About Us', href: '#story' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-brand-primary mb-4">PRECISION</h3>
            <p className="text-brand-secondary text-sm">
              Leading the way in precision engineering and manufacturing excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white-smoke font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-brand-secondary hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white-smoke font-semibold mb-4">Business Hours</h4>
            <ul className="text-brand-secondary text-sm space-y-2">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white-smoke font-semibold mb-4">Certifications</h4>
            <ul className="text-brand-secondary text-sm space-y-2">
              <li>ISO 9001:2015</li>
              <li>AS9100D</li>
              <li>IATF 16949</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-brand-secondary text-sm">
          © {new Date().getFullYear()} Precision Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
}