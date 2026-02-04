import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from './Badge';
import { ActionButton } from './ActionButton';

/**
 * A "Molecule" component that composes Atoms (Badge, ActionButton).
 */
export const UserCard = ({ 
  name, 
  role, 
  status, 
  statusColor, 
  onAction 
}) => {
  const cardStyle = {
    border: '1px solid var(--card-border)',
    borderRadius: '12px',
    padding: '20px',
    width: '300px',
    fontFamily: 'sans-serif',
    backgroundColor: 'var(--card-bg)',
    color: 'var(--text-color)',
    boxShadow: '0 4px 6px var(--card-shadow)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{name}</div>
        <Badge label={status} status={status} size="small" />
      </div>
      <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{role}</div>
      <div style={{ marginTop: '8px' }}>
        <ActionButton 
          label="View Profile" 
          variant="outline" 
          onClick={onAction} 
        />
      </div>
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['default', 'success', 'error', 'warning']),
  onAction: PropTypes.func,
};

UserCard.defaultProps = {
  status: 'default',
  onAction: () => {},
};
