/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Card = ({ title, image, description, slug }) => {
  return (
    <div style={styles.card}>
    <img src={image} alt={title} style={styles.image} />
    <div style={styles.content}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <Link href={`/insights/${slug}`} >
        Read More
      </Link>
    </div>
  </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '1em',
    color: '#555',
    margin: '0 0 16px 0',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    background: '#0070f3',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none',
    alignSelf: 'flex-start',
  },
};

export default Card;
