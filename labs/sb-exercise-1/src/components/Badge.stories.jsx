import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Success = {
  args: {
    label: 'Success',
    status: 'success',
    size: 'medium',
  },
};

export const Warning = {
  args: {
    label: 'Warning',
    status: 'warning',
    size: 'medium',
  },
};

export const Danger = {
  args: {
    label: 'Error',
    status: 'error',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Large Badge',
    status: 'default',
    size: 'large',
  },
};
