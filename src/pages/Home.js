import React from "react";
import GIF from '../assets/heroGID.gif';


const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h2>My Website</h2>
        <p>
          We are passionate about building amazing websites using React. 
          Discover our journey and how we can help you achieve your goals.
        </p>
        <p>
          Whether you're looking to learn, create, or innovate, we have the 
          resources and expertise to support your vision. Let's build something
          incredible together!
        </p>
      </div>
      <div className="home-image">
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXk5dHFoZGR3aHAwcTh3ZjBkdDEyNmNtaDRibml3dDZ5cHpqeGthbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RbDKaczqWovIugyJmW/giphy.gif"
          alt="React Development" 
        />
      </div>
    </section>
  );
};

export default Home;
