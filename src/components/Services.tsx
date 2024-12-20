import React from 'react';
import { Settings, Thermometer, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "CNC Machining",
      description: "State-of-the-art CNC machining services with precision up to 0.001mm tolerance."
    },
    {
      icon: <Thermometer className="w-12 h-12" />,
      title: "Heat Treatment",
      description: "Advanced heat treatment solutions to enhance material properties and durability."
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Cold Forging",
      description: "Expert cold forging services for high-strength, precise metal components."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white-smoke mb-16">
          Our <span className="text-brand-primary">Services</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="section-fade bg-brown/20 p-8 rounded-lg border border-brand-secondary/20 hover:border-brand-primary transition-all"
            >
              <div className="text-brand-primary mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white-smoke mb-4">{service.title}</h3>
              <p className="text-brand-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}