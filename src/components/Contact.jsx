// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.sendForm(
      'YOUR_EMAILJS_SERVICE_ID',
      'YOUR_EMAILJS_TEMPLATE_ID',
      form.current,
      'YOUR_EMAILJS_USER_ID'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      console.log(error.text);
      setStatus('error');
    })
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => setStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="shape-fill"></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            We're ready to provide your water solution
          </motion.p>
        </div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Details</h3>
            
            {/* Email */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>info@bluesourcewater.com</p>
              </div>
            </div>
            
            {/* Mobile */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Mobile</h4>
                <p>+27 69 821 4495</p>
              </div>
            </div>
            
            {/* WhatsApp */}
            <div className="contact-detail">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a
                    href="https://wa.me/27629278818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    +27 62 927 8818
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">LI</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  placeholder="Your name" 
                  required 
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  placeholder="Your email" 
                  required 
                />
              </motion.div>
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  rows="5" 
                  required 
                ></textarea>
              </motion.div>
              
              <motion.button
                className="btn submit-btn"
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {status === 'success' && (
                <motion.div 
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaCheck /> Message sent successfully!
                </motion.div>
              )}
              
              {status === 'error' && (
                <motion.div 
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FaExclamationTriangle /> Error sending message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
