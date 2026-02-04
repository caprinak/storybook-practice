import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Badge component for status markers.
 */
export const Badge = ({ label, status = 'default', size = 'medium' }) => {
  const statusColors = {
    success: '#1b5e20', // Dark Green
    error: '#c62828',   // Dark Red
    default: '#424242', // Dark Gray
    warning: '#af3d01', // Dark Orange
  };

  const style = {
    backgroundColor: statusColors[status] || statusColors.default,
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
  return <span style={style} role="status" aria-label={label}>{label}</span>;
};

Badge.propTypes = {
  /** The text to display inside the badge */
  label: PropTypes.string.isRequired,
  /** The status level of the badge */
  status: PropTypes.oneOf(['default', 'success', 'error', 'warning']),
  /** How large should the badge be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
