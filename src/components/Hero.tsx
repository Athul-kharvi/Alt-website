import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        className="hero-video"
        poster="https://images.unsplash.com/photo-1574170623305-6c8da0b1e486?auto=format&fit=crop&q=80"
      >
        <source src="https://player.vimeo.com/progressive_redirect/playback/789432439/rendition/1080p/file.mp4?loc=external" type="video/mp4" />
      </video>
      
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white-smoke mb-6">
          Precision Engineering
          <span className="block text-brand-primary mt-2 animate-glow">Excellence</span>
        </h1>
        <p className="text-xl text-white-smoke mb-8 max-w-2xl mx-auto animate-slide-in">
          Leading the industry in CNC Machining, Heat Treatment, and Cold Forging
        </p>
        <a 
          href="#services"
          className="inline-block bg-brand-primary text-black px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105 animate-bounce-in"
        >
          Explore Our Services
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white-smoke w-8 h-8" />
      </div>
    </div>
  );
}