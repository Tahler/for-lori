import React from 'react';
import Button from '../components/Button';
import styles from './index.module.css';

const Intro = () => (
  <div className={styles.intro}>
    <h1>Captivating Corsages</h1>
    <Button>Order</Button>
  </div>
);

const IndexPage = () => (
  <div style={{ height: '100%' }}>
    <Intro />
    <div>Gallery Content</div>
  </div>
);

export default IndexPage;
