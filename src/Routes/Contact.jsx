import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <motion.div
        className="homepage"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
      >
        <div className="contact-container">
          <div className="socials" data-aos="fade-left" data-aos-delay="100">
            📞 098-2346-886 <br></br>
            📧 example@gmail.com <br></br>✉ 0878-7554-986 <br></br>
            <Link to="/contact/socialmedia" className="btn find btn-primary">
              Socials
            </Link>
          </div>

          <div
            className="testimonials"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            ◉ No.5 Brooks Street, Ikang <br></br>☎ 432-861-09 <br></br>©
            P-senger🦜 <br></br>
            <Link to="/contact/testimonials" className="btn find btn-primary">
              Author
            </Link>
          </div>
        </div>
        <Outlet />
      </motion.div>
    </>
  );
}

export default Contact;
