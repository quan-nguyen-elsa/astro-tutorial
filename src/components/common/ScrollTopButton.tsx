import React from 'react';
import './ScrollTopButton.css';

const ScrollTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This enables smooth scrolling
    });
  };

  return (
    <button className="scroll-top-btn" onClick={handleScrollToTop}>
      <img loading="lazy" alt="" className="scroll-top-icon" width="32" height="32" src="https://d1t11jpd823i7r.cloudfront.net/roleplay/arrow-circle-up.svg" />
      <span className="scroll-top-label">Back to top</span>
    </button>
  );
};

export default ScrollTopButton;