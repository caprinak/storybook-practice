import React from 'react';
import PropTypes from 'prop-types';
import { TaskList } from './TaskList';

/**
 * A Page-level component that composes the TaskList and adds page-level layout/states.
 */
export const InboxScreen = ({ error, tasks, loading }) => {
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: 'var(--bg-color)',
    fontFamily: 'sans-serif',
  };

  const navStyle = {
    padding: '1.5rem',
    backgroundColor: '#26c6da',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '2rem'
  };

  const errorPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem',
    textAlign: 'center'
  };

  if (error) {
    return (
      <div style={pageStyle}>
        <div style={errorPageStyle}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>😕</div>
          <h1 style={{ fontSize: '24px', margin: '0 0 1rem' }}>Oh no!</h1>
          <p style={{ color: '#666' }}>Something went wrong. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>
          <span style={{ fontSize: '24px', marginRight: '8px' }}>🚀</span>
          Taskbox
        </h1>
      </nav>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: '18px', color: '#555', marginBottom: '1rem' }}>Your Tasks</h2>
        <TaskList tasks={tasks} loading={loading} />
      </div>
    </div>
  );
};

InboxScreen.propTypes = {
  /** If the page has an error */
  error: PropTypes.string,
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of tasks to pass to TaskList */
  tasks: TaskList.propTypes.tasks,
};

InboxScreen.defaultProps = {
  error: null,
  loading: false,
};
