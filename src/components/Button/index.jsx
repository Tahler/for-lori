import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

const Button = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
