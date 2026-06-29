import React from 'react';
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';

interface RouteCardProps {
  id: string;
  title: string;
  region: string;
  travelMood: string;
  recommendedSeason: string;
  duration: string;
  highlights: string[];
  imageUrl?: string;
}

export const RouteCard: React.FC<RouteCardProps> = ({
  title,
  region,
  travelMood,
  recommendedSeason,
  duration,
  highlights,
  imageUrl
}) => {
  return (
    <Link to={`/routes`} className={styles.routeCard}>
      {imageUrl && (
        <div className={styles.cardImageContainer}>
          <img src={imageUrl} alt={title} className={styles.cardImage} />
        </div>
      )}
      <div className={styles.cardHeader}>
        <span className={styles.region}>{region}</span>
        <span className={styles.duration}>{duration}</span>
      </div>
      <h3 className={styles.routeTitle}>{title}</h3>
      
      <div className={styles.tags}>
        <span className={styles.tag}>{travelMood}</span>
        <span className={styles.tag}>{recommendedSeason}向け</span>
      </div>

      <ul className={styles.highlights}>
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className={styles.cardFooter}>
        詳細を見る <span className={styles.arrow}>→</span>
      </div>
    </Link>
  );
};
