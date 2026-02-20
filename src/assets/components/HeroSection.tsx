import React from "react";
import schoolImage from "../assets/images/school.jpg";
import schoolVideo from "../assets/videos/school-video.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to School Management System</h1>
        <p>Empowering Education Through Technology</p>
        <button>Explore More</button>
      </div>

      <div className="media-section">
        <img src={schoolImage} alt="School" className="hero-image" />
        <video
          src={schoolVideo}
          autoPlay
          loop
          muted
          className="hero-video"
        />
      </div>
    </section>
  );
};

export default HeroSection;