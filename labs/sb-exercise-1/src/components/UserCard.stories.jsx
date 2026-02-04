import { UserCard } from './UserCard';
import { fn } from '@storybook/test';

export default {
  title: 'Molecules/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  args: { onAction: fn() },
  // Using a Decorator to add some padding to the preview
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
        <Story />
      </div>
    ),
  ],
};

export const ActiveAdmin = {
  args: {
    name: 'John Doe',
    role: 'System Administrator',
    status: 'success',
  },
};

export const InactiveUser = {
  args: {
    name: 'Jane Smith',
    role: 'Developer',
    status: 'default',
  },
};

export const PendingReview = {
  args: {
    name: 'Alex Johnson',
    role: 'Guest Contributor',
    status: 'warning',
  },
};
