import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Badge component for status markers.
 */
export const Badge = ({ label, status = 'default', size = 'medium' }) => {
  const statusTokens = {
    success: { bg: 'var(--status-success-bg)', text: 'var(--status-success-text)' },
    error: { bg: 'var(--status-error-bg)', text: 'var(--status-error-text)' },
    default: { bg: 'var(--status-default-bg)', text: 'var(--status-default-text)' },
    warning: { bg: 'var(--status-warning-bg)', text: 'var(--status-warning-text)' },
  };

  const activeToken = statusTokens[status] || statusTokens.default;

  const style = {
    backgroundColor: activeToken.bg,
    color: activeToken.text,
    padding: size === 'large' ? '8px 16px' : '4px 8px',
    borderRadius: '12px',
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
