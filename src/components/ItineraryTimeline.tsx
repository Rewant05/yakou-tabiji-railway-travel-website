import React from 'react';
import styles from './ItineraryTimeline.module.css';

interface ItineraryTimelineProps {
  id: string;
  title: string;
  duration: string;
  routeSummary: string;
  morningPlan: string;
  afternoonPlan: string;
  eveningPlan: string;
  budgetRange: string;
  travelTip: string;
}

export const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({
  title,
  duration,
  routeSummary,
  morningPlan,
  afternoonPlan,
  eveningPlan,
  budgetRange,
  travelTip
}) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.header}>
        <span className={styles.durationBadge}>{duration}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{routeSummary}</p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.event}>
          <div className={styles.timePoint}>午前</div>
          <div className={styles.eventContent}>
            <p>{morningPlan}</p>
          </div>
        </div>
        
        <div className={styles.event}>
          <div className={styles.timePoint}>午後</div>
          <div className={styles.eventContent}>
            <p>{afternoonPlan}</p>
          </div>
        </div>

        <div className={styles.event}>
          <div className={styles.timePoint}>夕方・夜</div>
          <div className={styles.eventContent}>
            <p>{eveningPlan}</p>
          </div>
        </div>
      </div>

      <div className={styles.footerInfo}>
        <div className={styles.infoBox}>
          <strong>予算目安:</strong> {budgetRange}
        </div>
        <div className={styles.tipBox}>
          <strong>旅路のヒント:</strong> {travelTip}
        </div>
      </div>
    </div>
  );
};
