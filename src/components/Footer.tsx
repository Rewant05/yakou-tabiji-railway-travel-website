import React from 'react';
import { Link } from '../router';
import { siteMeta } from '../config/siteMeta';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandInfo}>
            <h2 className={styles.logo}>{siteMeta.websiteName}</h2>
            <p className={styles.tagline}>{siteMeta.tagline}</p>
            <p className={styles.description}>{siteMeta.description}</p>
          </div>
          
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3>メニュー</h3>
              <ul>
                {siteMeta.navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h3>インフォメーション</h3>
              <ul>
                {siteMeta.footerLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <a href={siteMeta.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.disclaimerSection}>
          <div className={styles.stamp}>独立編集</div>
          <p>{siteMeta.travelDisclaimer}</p>
          <p className={styles.editorialNote}>※当サイトは独立した編集ガイドであり、公式の鉄道会社や観光局ではありません。</p>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.companyInfo}>
            {siteMeta.companyName} | {siteMeta.address} | {siteMeta.email}
          </p>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} {siteMeta.websiteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
