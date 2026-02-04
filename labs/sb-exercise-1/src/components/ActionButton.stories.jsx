import { ActionButton } from './ActionButton';
import { fn } from '@storybook/test';

export default {
  title: 'Atoms/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // This automatically mocks onClick and logs it in the "Actions" tab
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Outline = {
  args: {
    label: 'Outline Style',
    variant: 'outline',
  },
};

export const Disabled = {
  args: {
    label: 'Cannot Click',
    disabled: true,
  },
};
