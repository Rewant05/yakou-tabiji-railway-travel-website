import React from 'react';
import { stationTowns } from '../config/travelData';
import { StationTownCard } from '../components/StationTownCard';
import styles from './Home.module.css';

export const StationTowns: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">駅町ガイド</h1>
        <p style={{ marginBottom: '32px', color: '#cbd5e1' }}>
          列車を降りて、その町を歩く。駅を中心とした歴史ある町並みや、地元の人に愛される喫茶店など、駅町の魅力をご紹介します。
        </p>
        
        <div className={styles.grid}>
          {stationTowns.map((town, index) => (
            <StationTownCard key={town.id} {...town} priority={index < 3} />
          ))}
        </div>
      </div>
    </div>
  );
};
