import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const IndexLayout = ({ children }) => (
  <div>
    <Helmet
      title="Captivating Corsages"
      meta={[
        { name: 'description', content: 'Corsages in the Bay Area' },
        { name: 'keywords', content: 'corsages, flowers, San Jose, Bay Area' },
      ]}
    />
    <div
      style={{
        height: '100%',
        margin: '0 auto',
      }}
    >
      {children()}
    </div>
  </div>
);

IndexLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default IndexLayout;
