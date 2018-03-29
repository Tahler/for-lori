import React from 'react';
import Button from '../components/Button';
import styles from './index.module.css';
import flower from './flower2.jpg';

const Intro = () => (
    <div className={styles.intro}>
        <h1>Captivating Corsages</h1>
        <Button>Order</Button>
        <Nav />
    </div>
);

const Nav = () => {
    // TODO scroll spy and remove absolute positioning
    return (
        <nav style={{alignSelf: 'flex-end'}} className={styles.nav}>
            <ul style={{
                display: 'flex',
            }}>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
};

const Tile = ({ src }) => (
    <div style={{
        margin: '8px',
        border: '2px solid #777',
        padding: '8px',
    }}>
        <img style={{margin: 0}} src={src} alt="tile" />
    </div>
);

const Gallery = () => {
    const imgs = [flower, flower, flower, flower, flower, flower, flower]
            .map(src => (<Tile src={src} />));
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        }}>
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
