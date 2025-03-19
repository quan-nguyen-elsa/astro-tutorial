import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo"><img src="https://d1t11jpd823i7r.cloudfront.net/influencer/ELSA.svg" alt="" /></div>
          <div className="footer-download">
            <h3 className="footer-title">Download the ELSA Speak App</h3>
            <ul className="elsa-apps">
              <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/Appstore2.png" alt="" /></a></li>
              <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/GooglePlay2.png" alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bot">
        <div className="container">
          <div className="copyright">Copyright ©2025 ELSA. All Rights Reserved</div>
          <ul className="socials">
            <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/Facebook.svg" alt="" /></a></li>
            <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/Instagram.svg" alt="" /></a></li>
            <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/Twitter.svg" alt="" /></a></li>
            <li><a href="#"><img src="https://d1t11jpd823i7r.cloudfront.net/new-inf/Youtube.svg" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};

export default Footer;