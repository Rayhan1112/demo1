import React from "react";
import GIF from '../assets/heroGID.gif';

const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img 
          src={GIF}
          alt="About Us" 
        />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At our core, we are passionate about delivering exceptional experiences 
          through web development. Our journey began with a simple goal: to empower 
          others with the tools and knowledge to succeed online.
        </p>
        <p>
          Join us as we continue to push boundaries, innovate, and create a lasting 
          impact in the world of technology and development.
        </p>
      </div>
    </section>
  );
};

export default About;
