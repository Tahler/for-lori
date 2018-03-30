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
      margin: '8px',
      border: '2px solid #777',
      padding: '8px',
    }}
  >
    <img style={{ margin: 0 }} src={src} alt="tile" />
  </div>
);

Tile.propTypes = { src: PropTypes.string.isRequired };

const Gallery = () => {
  const url =
    'https://www.fiftyflowers.com/site_files/FiftyFlowers/Image/Product/salmon-dahlia-flower-500_5bc0386d.jpg';
  const imgs = [url, url].map(src => <Tile src={src} />);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
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
