import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Success = {
  args: {
    label: 'Success',
    color: '#28a745',
    size: 'medium',
  },
};

export const Warning = {
  args: {
    label: 'Warning',
    color: '#ffc107',
    size: 'medium',
  },
};

export const Danger = {
  args: {
    label: 'Error',
    color: '#dc3545',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Large Badge',
    color: '#007bff',
    size: 'large',
  },
};
