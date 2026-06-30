import React from 'react';
import { termsAndConditions } from '../config/legalData';
import { siteMeta } from '../config/siteMeta';
import styles from './Page.module.css';

export const Terms: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className={`container ${styles.contentContainer}`}>
        <h1 className="page-title">利用規約</h1>
        
        <div className={styles.prose}>
          <p>
            この利用規約は、{siteMeta.companyName}が提供する当サイトの利用条件を定めるものです。
          </p>
          
          {termsAndConditions.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}

          <p style={{ marginTop: '48px', fontSize: '0.9rem', color: '#94a3b8' }}>
            制定日: 2024年1月1日
          </p>
        </div>
      </div>
    </div>
  );
};
