import React from "react";
import GIF from '../assets/heroGID.gif';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for everything React!</p>
      </div>
      <img 
        src={GIF} 
        alt="Animated GIF" 
        className="hero-gif"
      />
    </section>
  );
};

export default Hero;
