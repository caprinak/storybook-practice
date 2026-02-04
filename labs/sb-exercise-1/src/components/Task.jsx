import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Task component following the Intro to Storybook tutorial.
 */
export const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: 'var(--card-bg)',
    borderBottom: '1px solid var(--divider-color)',
    fontFamily: 'sans-serif',
  };

  const checkboxStyle = {
    marginRight: '12px',
    cursor: 'pointer'
  };

  const titleStyle = {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '20px',
    color: state === 'TASK_ARCHIVED' ? 'var(--text-muted)' : 'var(--text-color)',
    textDecoration: state === 'TASK_ARCHIVED' ? 'line-through' : 'none',
  };

  const pinStyle = {
    cursor: 'pointer',
    color: state === 'TASK_PINNED' ? 'var(--pin-color)' : 'var(--icon-secondary)',
    fontSize: '20px',
    marginLeft: '12px'
  };

  return (
    <div style={containerStyle}>
      <label style={checkboxStyle} aria-label={`archiveTask-${id}`}>
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span 
          onClick={() => onArchiveTask(id)} 
          role="button"
          aria-label="archive"
          tabIndex={0}
        />
      </label>
      <div style={{ flexGrow: 1 }}>
        <input 
          type="text" 
          value={title} 
          readOnly={true} 
          placeholder="Input title" 
          aria-label={title}
          style={{ 
            ...titleStyle,
            border: 'none', 
            background: 'transparent', 
            width: '100%', 
            outline: 'none',
          }}
        />
      </div>
      <div 
        onClick={() => onPinTask(id)} 
        style={pinStyle}
        role="button"
        aria-label={state === 'TASK_PINNED' ? 'unpin' : 'pin'}
        tabIndex={0}
      >
        <span className="icon-star" aria-hidden="true">★</span>
      </div>
    </div>
  );
};

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
