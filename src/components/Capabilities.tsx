import React from 'react';
import { Gauge, Shield, Clock, Target } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Precision",
      description: "Achieving tolerances up to ±0.001mm"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality",
      description: "ISO 9001:2015 certified processes"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Efficiency",
      description: "Quick turnaround times"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customization",
      description: "Tailored solutions for your needs"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white-smoke mb-16">
          Our <span className="text-brand-primary">Capabilities</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {capabilities.map((item, index) => (
            <div 
              key={index}
              className="section-fade bg-black/50 p-6 rounded-lg border border-brand-secondary/20 hover:border-brand-primary transition-all group"
            >
              <div className="text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white-smoke mb-2">{item.title}</h3>
              <p className="text-brand-secondary text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}