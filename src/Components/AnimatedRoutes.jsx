import React from 'react'
import {  Routes, Route, useLocation,  } from "react-router-dom";
import SocialMedia from "../NestedRoutes/SocialMedia";
import About from "../Routes/About";
import Contact from "../Routes/Contact";
import Users from "../Routes/Users";
import Home from "../Routes/Home";
import Testimonials from "../NestedRoutes/Testimonials";
import Error from "../Routes/Error";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />}>
    <Route path="socialmedia" element={<SocialMedia />} />
    <Route path="testimonials" element={<Testimonials />} />

    </Route>
    <Route path="/about" element={<About />} />
    <Route path="/users" element={<Users />} />
    <Route path="*" element={<Error />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes
