import React from 'react';
import PropTypes from 'prop-types';
import { Task } from './Task';

/**
 * A TaskList component following the Intro to Storybook tutorial.
 */
export const TaskList = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  const containerStyle = {
    backgroundColor: 'white',
    minHeight: '200px',
    fontFamily: 'sans-serif',
  };

  const loadingStyle = {
    padding: '40px',
    textAlign: 'center',
    color: '#757575',
  };

  const emptyStyle = {
    padding: '40px',
    textAlign: 'center',
    color: '#666',
  };

  if (loading) {
    return <div style={loadingStyle}>Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return <div style={emptyStyle}>You have no tasks!</div>;
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
  ];

  return (
    <div style={containerStyle}>
      {tasksInOrder.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onPinTask={onPinTask} 
          onArchiveTask={onArchiveTask} 
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks */
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
};

TaskList.defaultProps = {
  loading: false,
};
