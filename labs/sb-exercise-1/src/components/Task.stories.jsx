import { Task } from './Task';
import { fn } from '@storybook/test';

export default {
  component: Task,
  title: 'Tutorial/Task',
  tags: ['autodocs'],
  args: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
