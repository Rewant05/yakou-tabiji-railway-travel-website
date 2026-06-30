import React from 'react';
import { itineraries } from '../config/travelData';
import { ItineraryTimeline } from '../components/ItineraryTimeline';

export const Itineraries: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">モデルコース</h1>
        <p style={{ marginBottom: '48px', color: '#cbd5e1' }}>
          週末の1泊2日や日帰りで楽しめる、おすすめの旅の行程表です。旅の計画の参考にしてください。
        </p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {itineraries.map(itinerary => (
            <ItineraryTimeline key={itinerary.id} {...itinerary} />
          ))}
        </div>
      </div>
    </div>
  );
};
