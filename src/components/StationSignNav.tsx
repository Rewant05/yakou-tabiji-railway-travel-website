import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../config/siteData';
import { Menu, X } from 'lucide-react';
import styles from './StationSignNav.module.css';

export const StationSignNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}></span>
            {siteData.websiteName}
          </Link>

          <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            {siteData.navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.stationDot}></span>
                {link.label}
              </Link>
            ))}
            <Link to="/routes" className={styles.ticketCta} onClick={closeMenu}>
              旅を探す
              <span className={styles.ticketCut}></span>
            </Link>
          </div>

          <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
};
