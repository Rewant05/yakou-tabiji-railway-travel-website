import React from 'react';
import styles from './Cards.module.css';

interface ResponsiveCardImageProps {
  imageUrl: string;
  alt: string;
  priority?: boolean;
}

const cardImageSizes =
  '(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) calc((100vw - 112px) / 3), 368px';

const optimizedImageUrl = (imageUrl: string, width: number) => {
  const fileName = imageUrl.split('/').pop() ?? imageUrl;
  const baseName = fileName.replace(/\.[a-z0-9]+$/i, '');
  return `/images/optimized/${baseName}-${width}.jpg`;
};

export const ResponsiveCardImage: React.FC<ResponsiveCardImageProps> = ({
  imageUrl,
  alt,
  priority = false,
}) => (
  <img
    src={optimizedImageUrl(imageUrl, 800)}
    srcSet={`${optimizedImageUrl(imageUrl, 480)} 480w, ${optimizedImageUrl(imageUrl, 800)} 800w`}
    sizes={cardImageSizes}
    alt={alt}
    className={styles.cardImage}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'low'}
    decoding="async"
    width="800"
    height="800"
  />
);
