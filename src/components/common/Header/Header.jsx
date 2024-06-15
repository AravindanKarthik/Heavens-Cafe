import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { links, info } from '../../../constants/data';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest('.nav-menu') &&
      !event.target.closest('.nav-toggle')
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="section-container">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            {info.title}
          </div>
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={toggleMenu}
                className={link.className}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;