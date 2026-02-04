import React from 'react';
import PropTypes from 'prop-types';

/**
 * A customizable button that demonstrates Storybook Actions.
 */
export const ActionButton = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    fontWeight: '600',
    fontSize: '14px',
    transition: 'opacity 0.2s',
    opacity: disabled ? 0.5 : 1,
    fontFamily: 'sans-serif',
  };

  const variants = {
    primary: { backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' },
    secondary: { backgroundColor: '#6c757d', color: 'white' },
    outline: { backgroundColor: 'transparent', color: 'var(--btn-outline-text)', border: '1px solid var(--btn-outline-text)' }
  };

  const style = { ...baseStyle, ...variants[variant] };

  return (
    <button 
      style={style} 
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

ActionButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
};
