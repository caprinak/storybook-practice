import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Badge component for status markers.
 */
export const Badge = ({ label, color = 'gray', size = 'medium' }) => {
  const style = {
    backgroundColor: color,
    padding: size === 'large' ? '8px 16px' : '4px 8px',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    display: 'inline-block',
    fontFamily: 'sans-serif',
    fontSize: size === 'large' ? '14px' : '12px',
    lineHeight: '1',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  return <span style={style}>{label}</span>;
};

Badge.propTypes = {
  /** The text to display inside the badge */
  label: PropTypes.string.isRequired,
  /** The background color of the badge */
  color: PropTypes.string,
  /** How large should the badge be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
