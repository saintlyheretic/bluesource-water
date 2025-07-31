// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sustainable Water Delivery for a Growing South Africa
          </motion.h2>
        </div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>💧 Welcome to BlueSource</h3>
            <p>
              Your trusted partner for bulk water supply in Johannesburg, Pretoria, and across South Africa. 
              We deliver fast, reliable water solutions to businesses and individuals—whether for emergencies, 
              projects, or planned deliveries.
            </p>
            <p>
              When you need water, we bring the source to you—swiftly, safely, and professionally. 
              Our commitment to quality and sustainability ensures that every drop we deliver meets 
              the highest standards of purity and safety.
            </p>
            <p>
              With years of experience in the water industry, our team understands the unique challenges 
              of water supply in South Africa and provides tailored solutions to meet your specific needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="water-ripple">
              <div className="ripple ripple-1"></div>
              <div className="ripple ripple-2"></div>
              <div className="ripple ripple-3"></div>
              <div className="about-image-inner">
                <img 
                  src="https://images.pexels.com/photos/3030316/pexels-photo-3030316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Person drinking water (Photo by Kelly from Pexels)" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
