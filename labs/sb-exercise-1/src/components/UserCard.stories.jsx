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
      <div style={{ padding: '3rem', display: 'flex', justifyContent: 'center', backgroundColor: '#f5f7f9' }}>
        <Story />
      </div>
    ),
  ],
};

export const ActiveAdmin = {
  args: {
    name: 'John Doe',
    role: 'System Administrator',
    status: 'Active',
    statusColor: '#28a745',
  },
};

export const InactiveUser = {
  args: {
    name: 'Jane Smith',
    role: 'Developer',
    status: 'Inactive',
    statusColor: '#6c757d',
  },
};

export const PendingReview = {
  args: {
    name: 'Alex Johnson',
    role: 'Guest Contributor',
    status: 'Pending',
    statusColor: '#ffc107',
  },
};
