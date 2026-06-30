import React from 'react';
import { privacyPolicy } from '../config/legalData';
import { siteMeta } from '../config/siteMeta';
import styles from './Page.module.css';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className={`container ${styles.contentContainer}`}>
        <h1 className="page-title">プライバシーポリシー</h1>
        
        <div className={styles.prose}>
          <p>
            {siteMeta.companyName}（以下「当サイト」）は、以下のとおりプライバシーポリシーを定めます。
          </p>
          
          {privacyPolicy.map((section, index) => (
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
