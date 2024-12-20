import React from 'react';

export default function Story() {
  return (
    <section id="story" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1565434275951-e2f5a402a3fd?auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="section-fade max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white-smoke mb-8">
            Our <span className="text-brand-primary">Story</span>
          </h2>
          <p className="text-brand-secondary mb-6 leading-relaxed">
            Since 1970, we've been at the forefront of precision engineering, 
            delivering excellence in manufacturing solutions. Our journey began 
            with a simple mission: to provide unparalleled quality in metal 
            fabrication and engineering services.
          </p>
          <p className="text-brand-secondary leading-relaxed">
            Today, we continue to push the boundaries of what's possible in 
            manufacturing, combining traditional expertise with cutting-edge 
            technology to serve industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}