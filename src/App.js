import React from 'react';
import './style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ErrorBoundary } from './Components/ErrorBoundary';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <ErrorBoundary>
        <Router>
          <header className="header bg-primary text-white p-4">
            <h3 className="logo">
              <span className="p">P</span>-senger🦜{' '}
            </h3>

            <div className="dropdown">
              <Hamburger
                toggle={() => setOpen((prevOpen) => !prevOpen)}
                rounded
                toggled={isOpen}
              />
              <div className={isOpen ? 'dropdown-content' : 'setOpen'}>
                <a href="/">HOME</a>
                <a href="/contact">CONTACT</a>
                <a href="/about">ABOUT</a>
                <a href="/users">USERS</a>
                <a href="/404">404</a>
              </div>
            </div>

            <Link to="/" className="btn menu-link btn-primary">
              Home
            </Link>
            <Link to="/contact" className="btn menu-link btn-primary">
              Contact
            </Link>
            <Link to="/about" className="btn menu-link btn-primary">
              About
            </Link>
            <Link to="/users" className="btn menu-link btn-primary usersbtn">
              Users
            </Link>
            <Link to="/404" className="btn menu-link btn-primary usersbtn">
          404
        </Link>
          </header>
          <AnimatedRoutes />
        </Router>
      </ErrorBoundary>
    </div>
  );
}
