import React from 'react';
import Button from '../components/Button';
import styles from './index.module.css';
import flower from './flower.jpg';

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
        <nav style={{
            bottom: 0,
            position: 'absolute',
            // float: 'right',
            // flexAlign: 'end',
        }}>
            <ul style={{
                display: 'block',
                float: 'left',
                listStyle: 'none',
            }}>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
};

const Tile = ({ src }) => (
    <div style={{
        padding: '10px',
    }}>
        <img style={{margin: 0}} src={src} alt="tile" />
    </div>
);

const Gallery = () => {
    const imgs = [flower, flower, flower].map(src => (<Tile src={src} />));
    return (
        <div style={{
            display: 'flex',
        }}>
            {imgs}
        </div>
    );
};

const IndexPage = () => (
    <div style={{ height: '100%' }}>
        <Intro />
        <div>Gallery Content</div>
        <Gallery />
    </div>
);

export default IndexPage;
