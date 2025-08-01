// src/components/Services.jsx

import React from 'react';
import './Services.css';
import { FaTruck, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Residential Services",
    description:
      "Comprehensive water solutions for homes—regular supply, emergency delivery, and tank installations.",
    features: [
      "Household supply",
      "Pool filling",
      "Tank installation",
      "Scheduled deliveries"
    ],
    image:
      "https://images.pexels.com/photos/16020741/pexels-photo-16020741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 2,
    title: "Commercial Services",
    description:
      "Bulk water for businesses: construction sites, shopping centers, hotels and industrial applications.",
    features: [
      "Bulk supply",
      "Site deliveries",
      "Hotel & mall supply",
      "Industrial water"
    ],
    image:
      "https://images.pexels.com/photos/67184/pexels-photo-67184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    id: 3,
    title: "Emergency Services",
    description:
      "24/7 rapid response for water outages and crises—guaranteed on-site within 2 hours.",
    features: [
      "24/7 response",
      "Rapid delivery",
      "Crisis management",
      "Backup supply"
    ],
    image:
      "https://images.pexels.com/photos/28674471/pexels-photo-28674471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const benefits = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Fast Delivery",
    text: "Modern tankers and GPS routing ensure on-time arrival every time."
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Certified Safety",
    text: "All water meets SANS 241 standards with rigorous hygiene protocols."
  },
  {
    id: 3,
    icon: <FaHandsHelping />,
    title: "Community Focus",
    text: "Dedicated to providing clean, reliable water access to underserved communities."
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        {/* Header */}
        <div className="services-header">
          <h2>Our Water Solutions</h2>
          <p>Providing reliable water services across South Africa</p>
        </div>

        {/* Flip-card grid */}
        <div className="services-grid">
          {services.map(s => (
            <div key={s.id} className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={s.image} alt={s.title} />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <div className="flip-back">
                  <h3>{s.title}</h3>
                  <ul>
                    {s.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <a href="#contact" className="btn">Request A Service</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="benefits-header">
          <h2>Why Choose BlueSource</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map(b => (
            <div key={b.id} className="benefit-card">
              <div className="benefit-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
