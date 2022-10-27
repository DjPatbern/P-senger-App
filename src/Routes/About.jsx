import React from 'react'
import { motion } from "framer-motion";


function About() {
  return (
    <motion.div className="homepage"       initial={{ width: 0 }}
    animate={{ width: '100%' }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
              <div className="about-container">
          <div className="vision" data-aos="fade-up">
            <h4>OUR VISION</h4>
            <p>P-Senger Team is highly looking forward<br></br>to building a strong online community where<br></br>
            people can freely meet and interact with<br></br> no fear of scam and discrimination.</p>
          </div>

          <div className="mission" data-aos="fade-down">
          <h4>OUR MISSION</h4>
            <p>Our Mission is to ensure a scam free<br></br>web media, a no cost fun and <br></br>
            interaction and many more.<br></br> Thank you for choosing P-senger.</p>
          </div>
        </div>
    </motion.div>
  )
}

export default About
