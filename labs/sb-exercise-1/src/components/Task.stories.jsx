import { Task } from './Task';
import { fn, within, userEvent, expect } from '@storybook/test';

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

export const PinTaskInteraction = {
  args: {
    ...Default.args,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Find the star icon (the pin button)
    const pinButton = canvas.getByText('★');
    // Simulate a click
    await userEvent.click(pinButton);
    // Verify that the onPinTask mock was called
    await expect(args.onPinTask).toHaveBeenCalled();
  },
};
