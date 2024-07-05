import React from 'react';
import styles from './ReviewCard.module.scss';
import Image from 'next/image';
import styled from 'styled-components';

const ReviewCard = ({ imageSrc, title, description, ratings }) => {
  return (
    <div className={styles.cardContainer}>
       
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.ratingContainer}>
  
        
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
