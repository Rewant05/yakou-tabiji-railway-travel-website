import React, { useEffect, useState } from 'react';
import { Link, useLocation } from '../router';
import { siteMeta } from '../config/siteMeta';
import styles from './StationSignNav.module.css';

export const StationSignNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeMenuOnScroll = () => setIsOpen(false);

    window.addEventListener('scroll', closeMenuOnScroll, { passive: true });
    window.addEventListener('wheel', closeMenuOnScroll, { passive: true });
    window.addEventListener('touchmove', closeMenuOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', closeMenuOnScroll);
      window.removeEventListener('wheel', closeMenuOnScroll);
      window.removeEventListener('touchmove', closeMenuOnScroll);
    };
  }, [isOpen]);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoIcon}></span>
            {siteMeta.websiteName}
          </Link>

          <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            {siteMeta.navLinks.map((link) => (
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
            <span className={`${styles.menuGlyph} ${isOpen ? styles.closeGlyph : ''}`} aria-hidden="true"></span>
          </button>
        </div>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </>
  );
};
