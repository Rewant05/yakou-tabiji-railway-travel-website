import React from 'react';
import { routes } from '../config/travelData';
import { RouteCard } from '../components/RouteCard';
import styles from './Home.module.css';

export const Routes: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">路線の旅</h1>
        <p style={{ marginBottom: '32px', color: '#cbd5e1' }}>
          全国各地の魅力的な鉄道路線をご紹介します。週末の小さな旅から、夜を越える長い旅まで、あなたにぴったりの路線を見つけてください。
        </p>
        
        <div className={styles.grid}>
          {routes.map((route, index) => (
            <RouteCard key={route.id} {...route} priority={index < 3} />
          ))}
        </div>
      </div>
    </div>
  );
};
