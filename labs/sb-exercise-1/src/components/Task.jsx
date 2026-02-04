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
    backgroundColor: 'white',
    borderBottom: '1px solid #f0f0f0',
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
    color: state === 'TASK_ARCHIVED' ? '#aaa' : '#333',
    textDecoration: state === 'TASK_ARCHIVED' ? 'line-through' : 'none',
  };

  const pinStyle = {
    cursor: 'pointer',
    color: state === 'TASK_PINNED' ? '#26c6da' : '#eee',
    fontSize: '20px',
    marginLeft: '12px'
  };

  return (
    <div style={containerStyle}>
      <label style={checkboxStyle}>
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span onClick={() => onArchiveTask(id)} />
      </label>
      <div style={titleStyle}>
        <input 
          type="text" 
          value={title} 
          readOnly={true} 
          placeholder="Input title" 
          style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none' }}
        />
      </div>
      <div onClick={() => onPinTask(id)} style={pinStyle}>
        <span className="icon-star">★</span>
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
