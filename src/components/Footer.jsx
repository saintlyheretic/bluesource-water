// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhone
} from 'react-icons/fa';
// Import the white logo
import logoWhite from '../images/BlueSource_white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Logo & tagline */}
        <div className="footer-logo">
          <img
            src={logoWhite}
            alt="BlueSource Water Logo"
            className="footer-logo-img"
          />
          <p>Your partner for clean, reliable water services across South Africa.</p>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact info & social */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><FaPhone style={{ marginRight: '8px' }}/> +27 69 821 4495</li>
            <li>
              <a
                href="https://wa.me/27629278818"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <FaWhatsapp style={{ marginRight: '8px' }}/> +27 62 927 8818
              </a>
            </li>
          </ul>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BlueSource Water. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
