import React from 'react';
import styles from './Cards.module.css';

interface StationTownCardProps {
  id: string;
  name: string;
  region: string;
  stationAtmosphere: string;
  shortDescription: string;
  imageUrl?: string;
}

export const StationTownCard: React.FC<StationTownCardProps> = ({
  name,
  region,
  stationAtmosphere,
  shortDescription,
  imageUrl
}) => {
  return (
    <div className={styles.townCard}>
      {imageUrl && (
        <div className={styles.cardImageContainer}>
          <img src={imageUrl} alt={name} className={styles.cardImage} />
        </div>
      )}
      <div className={styles.townHeader}>
        <span className={styles.townName}>{name}</span>
        <span className={styles.region}>{region}</span>
      </div>
      <p className={styles.atmosphere}>駅の雰囲気: {stationAtmosphere}</p>
      <p className={styles.townDesc}>{shortDescription}</p>
      <button className={styles.readMoreBtn}>町を歩く</button>
    </div>
  );
};
