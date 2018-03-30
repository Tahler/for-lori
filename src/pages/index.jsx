import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import styles from './index.module.css';

const Intro = () => (
  <div className={styles.intro}>
    <h1>Captivating Corsages</h1>
    <Button>Order</Button>
    <Nav />
  </div>
);

// TODO scroll spy and remove absolute positioning
const Nav = () => (
  <nav style={{ alignSelf: 'flex-end' }} className={styles.nav}>
    <ul style={{ display: 'flex' }}>
      <li>
        <a href="#gallery">Gallery</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  </nav>
);

const Tile = ({ src }) => (
  <div
    style={{
      margin: '4px',
      // border: '2px solid #777',
      // borderRadius: '8px',
      // padding: '8px',
    }}
  >
    <img
      style={{
        margin: 0,
        display: 'block',
        borderRadius: '8px',
      }}
      src={src}
      alt="tile"
    />
  </div>
);

Tile.propTypes = { src: PropTypes.string.isRequired };

const Gallery = () => {
  const srcs = [
    'http://placehold.it/240x240',
    'http://placehold.it/480x240',
    'http://placehold.it/480x240',
    'http://placehold.it/240x240',
    'http://placehold.it/480x240',
    'http://placehold.it/240x240',
    'http://placehold.it/120x240',
    'http://placehold.it/240x240',
    'http://placehold.it/120x240',
    'http://placehold.it/240x240',
    'http://placehold.it/480x240',
  ];
  const imgs = srcs.map(src => <Tile src={src} />);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {imgs}
    </div>
  );
};

const IndexPage = () => (
  <div style={{ height: '100%' }}>
    <Intro />
    <h2>Gallery</h2>
    <Gallery />
  </div>
);

export default IndexPage;
