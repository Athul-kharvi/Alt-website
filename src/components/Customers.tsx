import React from 'react';

export default function Customers() {
  const testimonials = [
    {
      quote: "Their precision engineering capabilities have consistently exceeded our expectations.",
      author: "John Smith",
      position: "Chief Engineer, Aerospace Dynamics"
    },
    {
      quote: "A reliable partner in our manufacturing process, delivering quality results every time.",
      author: "Sarah Johnson",
      position: "Production Manager, AutoTech Industries"
    }
  ];

  return (
    <section id="customers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white-smoke mb-16">
          Our <span className="text-brand-primary">Customers</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="section-fade bg-black/50 p-8 rounded-lg border border-brand-secondary/20"
            >
              <blockquote className="text-white-smoke text-lg mb-4">"{item.quote}"</blockquote>
              <div className="text-brand-primary font-semibold">{item.author}</div>
              <div className="text-brand-secondary text-sm">{item.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}