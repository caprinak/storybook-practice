import React from 'react';
import '../src/theme.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo"
    }
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const { theme } = context.globals;
      // Use React.createElement instead of JSX to avoid .js vs .jsx conflicts
      return React.createElement(
        'div',
        {
          'data-theme': theme,
          style: { 
            padding: '20px', 
            minHeight: '100vh', 
            backgroundColor: 'var(--bg-color)', 
            color: 'var(--text-color)' 
          }
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;