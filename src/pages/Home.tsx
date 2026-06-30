import React from 'react';
import { DepartureBoardHero } from '../components/DepartureBoardHero';
import { featuredItineraries, featuredRoutes, featuredStationTowns } from '../config/homeData';
import { RouteCard } from '../components/RouteCard';
import { StationTownCard } from '../components/StationTownCard';
import { ItineraryTimeline } from '../components/ItineraryTimeline';
import styles from './Home.module.css';
import { Link } from '../router';

export const Home: React.FC = () => {
  return (
    <div>
      <DepartureBoardHero />

      <main>
        {/* Featured Routes Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="section-title">路線の旅</h2>
            <div className={styles.grid}>
              {featuredRoutes.map(route => (
                <RouteCard key={route.id} {...route} />
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link to="/routes" className={styles.outlineBtn}>すべての路線を見る</Link>
            </div>
          </div>
        </section>

        {/* Station Towns Section */}
        <section className={`${styles.section} ${styles.altBg}`}>
          <div className="container">
            <h2 className="section-title">駅町ガイド</h2>
            <div className={styles.grid}>
              {featuredStationTowns.map(town => (
                <StationTownCard key={town.id} {...town} />
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link to="/station-towns" className={styles.outlineBtn}>すべての駅町を見る</Link>
            </div>
          </div>
        </section>

        {/* Itineraries Section */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="section-title">モデルコース</h2>
            <div className={styles.itineraryWrapper}>
              {featuredItineraries.map(itinerary => (
                <ItineraryTimeline key={itinerary.id} {...itinerary} />
              ))}
            </div>
            <div className={styles.centerAction}>
              <Link to="/itineraries" className={styles.outlineBtn}>すべてのモデルコースを見る</Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaCard}>
              <h2>お問い合わせ・情報提供</h2>
              <p>当サイトへの掲載依頼、取材に関するお問い合わせはこちらから。</p>
              <Link to="/contact" className={styles.primaryBtn}>お問い合わせフォーム</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
