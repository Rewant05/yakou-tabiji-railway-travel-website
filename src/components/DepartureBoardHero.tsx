import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DepartureBoardHero.module.css';

export const DepartureBoardHero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      
      <div className={styles.heroContent}>
        {/* Departure Board at Top/Center */}
        <div className={styles.departureBoard}>
          <div className={styles.boardRow}>
            <span className={styles.time}>23:45</span>
            <span className={styles.destination}>夜行</span>
            <span className={styles.track}>1番線</span>
          </div>
          <div className={styles.boardHeadline}>
            <h1>「次の旅は、夜汽車の窓から。」</h1>
          </div>
        </div>

        {/* Train Window with Moving Landscape */}
        <div className={styles.trainWindowFrame}>
          <div className={styles.windowGlass}>
            <div className={styles.movingLandscape}>
              <div className={styles.mountainSilhouettes}></div>
              <div className={styles.cityLights}></div>
            </div>
          </div>
          <div className={styles.windowReflection}></div>
        </div>

        {/* Subtext and Route Timeline */}
        <div className={styles.bottomSection}>
          <p className={styles.subtext}>
            「夜行旅路は、夜行列車、ローカル線、駅町、週末の小さな国内旅行を紹介する独立編集型の旅ガイドです。」
          </p>

          <div className={styles.routeTimeline}>
            <div className={styles.dot}></div>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
            <div className={styles.line}></div>
            <div className={styles.dot}></div>
          </div>
        </div>

        {/* Floating Ticket CTA & Stamp */}
        <div className={styles.floatingActions}>
          <div className={styles.stampBadge}>旅路</div>
          <Link to="/routes" className={styles.primaryTicket}>
            <span className={styles.ticketHoleLeft}></span>
            旅先ガイドを見る
            <span className={styles.ticketHoleRight}></span>
          </Link>
          <Link to="/itineraries" className={styles.secondaryTicket}>
            モデルコースを探す
          </Link>
        </div>
      </div>
    </section>
  );
};
